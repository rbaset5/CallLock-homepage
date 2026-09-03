import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'CallLock private preview | Storm-roof intake and evidence packet',
  description:
    'Private preview for insurance-storm roofing owners and operators. Storm-roof intake that builds an evidence packet. Live calllock.co is unchanged.',
  authors: [{ name: 'CallLock' }],
  creator: 'CallLock',
  publisher: 'CallLock',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'CallLock private preview',
    description:
      'Private preview for insurance-storm roofing owners and operators. Live calllock.co is unchanged.',
    siteName: 'CallLock',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} scroll-smooth`}>
      <body className={`${ibmPlexSans.className} bg-stone-50 text-stone-800 antialiased dark:bg-stone-950 dark:text-stone-100`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-trust focus:shadow"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
