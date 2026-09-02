import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "First Line Log - Input OTP Component",
  description: "Accessible one-time password component with copy-paste functionality",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
