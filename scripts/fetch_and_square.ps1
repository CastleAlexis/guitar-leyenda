param(
  [Parameter(Mandatory=$true)][string]$Url,
  [Parameter(Mandatory=$true)][string]$OutPath,
  [int]$Size = 1200
)

$ErrorActionPreference = 'Stop'

Write-Host "Downloading:" $Url
$tmpOrig = Join-Path $env:TEMP ([IO.Path]::GetRandomFileName() + '.img')
Invoke-WebRequest -Uri $Url -OutFile $tmpOrig

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

$outBmp = New-Object System.Drawing.Bitmap($Size, $Size)
$g2 = [System.Drawing.Graphics]::FromImage($outBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($crop, 0, 0, $Size, $Size)
$g2.Dispose()

$ext = ([IO.Path]::GetExtension($OutPath)).ToLowerInvariant()
if ($ext -eq '.png') {
  $outBmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
} else {
  $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90)
  $outBmp.Save($OutPath, $encoder, $encParams)
}

$bmp.Dispose(); $crop.Dispose(); $outBmp.Dispose()
Remove-Item $tmpOrig -ErrorAction SilentlyContinue
Write-Host "Saved ->" $OutPath
