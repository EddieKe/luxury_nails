import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Nails | Luxury Nail Art Studio",
  description:
    "Experience the art of luxury nail care. Our expert technicians blend creativity with precision to create stunning, personalized nail designs.",
  keywords: ["nail salon", "nail art", "manicure", "luxury nails", "beauty services"],
  icons: {
    icon: "/luxury_nails.png",
    apple: "/luxury_nails.png",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#EC4899",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
