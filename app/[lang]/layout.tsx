import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Voxxer - The Next Generation Communication Platform",
  description: "Connect, collaborate, and communicate like never before with Voxxer.",
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
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