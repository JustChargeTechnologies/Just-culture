import type { Metadata } from "next"
import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { CustomCursor } from "@/components/custom-cursor"


import { Instrument_Sans, Geist_Mono } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "JUST CULTURE | Creative Studio",
  description: "A creative studio focused on culture, luxury, editorial & art.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <body className={`${instrumentSans.variable} ${geistMono.variable} font-sans antialiased bg-white cursor-none`}>
        <CustomCursor />
        <SmoothScrollProvider>
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
