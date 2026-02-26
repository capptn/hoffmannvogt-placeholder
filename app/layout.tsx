import type { Metadata, Viewport } from 'next'
import { Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Hoffmann Vogt Immobilien | Ihr Makler fuer den bestmoeglichen Verkaufspreis',
  description: 'Erzielen Sie durchschnittlich +30.000 EUR mehr beim Verkauf Ihrer Immobilie. Kostenlose Bewertung, persoenliche Beratung und schneller Verkauf durch Hoffmann Vogt Immobilien.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${oswald.variable} bg-[#000000]`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
