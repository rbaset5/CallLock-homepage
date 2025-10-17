import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CallLock | Missed-Call Revenue Recovery for Service Businesses',
  description: 'Stop losing jobs to voicemail. CallLock\'s intelligent text-back system captures, qualifies, and converts every missed call into a high-value opportunity. See it in action.',
  keywords: 'missed call recovery, lead capture, service business, text back system, revenue recovery',
  authors: [{ name: 'CallLock' }],
  creator: 'CallLock',
  publisher: 'CallLock',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://calllock.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CallLock | Missed-Call Revenue Recovery for Service Businesses',
    description: 'Stop losing jobs to voicemail. CallLock\'s intelligent text-back system captures, qualifies, and converts every missed call into a high-value opportunity.',
    url: 'https://calllock.com',
    siteName: 'CallLock',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CallLock - Missed-Call Revenue Recovery',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CallLock | Missed-Call Revenue Recovery for Service Businesses',
    description: 'Stop losing jobs to voicemail. CallLock\'s intelligent text-back system captures, qualifies, and converts every missed call into a high-value opportunity.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
