import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PMG Transport Services",
  description: "Fast & Reliable Pickup Transport for Goods, Furniture, and House Moving.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair_display.variable} ${poppins.variable} ${oswald.variable} font-sans`}>{children}</body>
    </html>
  )
}
