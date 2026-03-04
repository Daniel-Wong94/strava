import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strava Dashboard',
  description: 'Your Strava activity dashboard — GitHub style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-[#0d1117] antialiased">
        {children}
      </body>
    </html>
  )
}
