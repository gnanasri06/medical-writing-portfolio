import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gnanasri06.github.io'),
  title: 'Gnanasri | Medical Writer & Medical Communication Specialist',
  description:
    'Professional medical writer with 4+ years of experience in pharma content writing, medical communication, clinical writing, and healthcare content for leading pharma brands.',
  keywords: [
    'medical writer',
    'pharma content writer',
    'medical communication specialist',
    'clinical writing',
    'healthcare content',
  ],
  openGraph: {
    title: 'Gnanasri | Medical Writer & Medical Communication Specialist',
    description:
      'Professional medical writer with 4+ years of experience in pharma content writing, medical communication, clinical writing, and healthcare content.',
    url: 'https://gnanasri06.github.io/medical-writing-portfolio/',
    siteName: 'Gnanasri Medical Writing Portfolio',
    images: [
      {
        url: '/medical-writing-portfolio/profile.jpg',
        width: 400,
        height: 400,
        alt: 'Gnanasri — Medical Writer & Medical Communication Specialist',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Gnanasri | Medical Writer & Medical Communication Specialist',
    description:
      'Professional medical writer with 4+ years of experience in pharma content writing and medical communication.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  )
}
