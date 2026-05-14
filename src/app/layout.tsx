import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nj4israel.org'),
  title: 'NJ for Israel',
  description: 'NJ for Israel — Under Development.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://nj4israel.org/',
    siteName: 'NJ for Israel',
    title: 'NJ for Israel',
    description: 'NJ for Israel — Under Development.',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '32x32' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
