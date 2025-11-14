$ErrorActionPreference = 'Stop'

$pageUrl = 'https://pt.wikipedia.org/wiki/Ficheiro:Mr._Big_-_Wacken_Open_Air_2018_18.jpg'
$resp = Invoke-WebRequest -Uri $pageUrl -UseBasicParsing
$html = $resp.Content

# Regex for direct JPG on upload.wikimedia.org
$pattern = @'
https?://upload\.wikimedia\.org[^"]+?\.jpg
'@
$m = [regex]::Match($html, $pattern)
if (-not $m.Success) { throw 'No direct image URL found' }
$imgUrl = $m.Value
# If it's a thumb path without size, append a 1600px variant
if ($imgUrl -match '/thumb/.+/(?<fname>[^/]+\.jpg)$') {
  $fname = $Matches['fname']
  if ($imgUrl -notmatch '/\d+px-') {
    $imgUrl = "$imgUrl/1600px-$fname"
  }
}
Write-Host "Image URL:" $imgUrl

$tmpOrig = Join-Path $env:TEMP 'paul-gilbert-orig.jpg'
Invoke-WebRequest -Uri $imgUrl -OutFile $tmpOrig

Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile($tmpOrig)
$min = [int][Math]::Min($bmp.Width, $bmp.Height)
$x = [int](($bmp.Width - $min)/2)
$y = [int](($bmp.Height - $min)/2)
$rect = New-Object System.Drawing.Rectangle($x, $y, $min, $min)
$crop = New-Object System.Drawing.Bitmap($min, $min)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$size = 1200
$outBmp = New-Object System.Drawing.Bitmap($size, $size)
$g2 = [System.Drawing.Graphics]::FromImage($outBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($crop, 0, 0, $size, $size)
$g2.Dispose()
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90)
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$outPath = Join-Path $repoRoot 'public/paul-gilbert-guitarist.jpg'
$outBmp.Save($outPath, $encoder, $encParams)
$bmp.Dispose(); $crop.Dispose(); $outBmp.Dispose()
Write-Host "Saved -> $outPath"
