import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guitar Legends Gallery | Las leyendas del rock",
  description: "Explora el legado de los guitarristas que marcaron la historia del rock",
  generator: "v0.app",
  keywords: [
    "guitarra",
    "rock",
    "guitarristas",
    "leyendas del rock",
    "galería",
  ],
  openGraph: {
    title: "Guitar Legends Gallery | Las leyendas del rock",
    description:
      "Explora el legado de los guitarristas que marcaron la historia del rock",
    url: "https://example.com",
    siteName: "Guitar Legends Gallery",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guitar Legends Gallery",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guitar Legends Gallery | Las leyendas del rock",
    description:
      "Explora el legado de los guitarristas que marcaron la historia del rock",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo-skull.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${_geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
