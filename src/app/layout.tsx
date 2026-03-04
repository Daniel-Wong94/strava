import type { Metadata } from 'next'
import './globals.css'
import { SettingsProvider } from '@/lib/settings-context'

export const metadata: Metadata = {
  title: 'Fitness Repo',
  description: 'Your fitness activity dashboard — GitHub style',
}

const antiFlashScript = `
try {
  var p = JSON.parse(localStorage.getItem('strava_prefs') || '{}');
  var t = p.theme || 'system';
  var s = p.colorScheme || 'orange';
  if (t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
  document.documentElement.setAttribute('data-color-scheme', s);
} catch(e) {}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#0d1117] antialiased">
        <SettingsProvider>
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}
