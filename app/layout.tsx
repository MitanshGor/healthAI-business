import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Pulse AI - Next-Generation Health Intelligence Platform',
  description: 'Transform health data into actionable insights with real-time monitoring, AI-powered analytics, and personalized health recommendations.',
  keywords: 'health, AI, digital health, wearable, analytics, real-time monitoring, health intelligence',
  authors: [{ name: 'Health Pulse AI Team' }],
  openGraph: {
    title: 'Health Pulse AI - Next-Generation Health Intelligence Platform',
    description: 'Transform health data into actionable insights with real-time monitoring, AI-powered analytics, and personalized health recommendations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Health Pulse AI - Next-Generation Health Intelligence Platform',
    description: 'Transform health data into actionable insights with real-time monitoring, AI-powered analytics, and personalized health recommendations.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
