import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { languages } from "../i18n/settings"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: "Voxxer - The Next Generation Communication Platform",
  description: "Connect, collaborate, and communicate like never before with Voxxer.",
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}