import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/app-shell';
import { site } from '@/constants/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: 'Ayus Dubey | Portfolio',
    template: '%s | Ayus Dubey',
  },
  description: site.summary,
  keywords: [
    'Ayus Dubey',
    'Full Stack Developer',
    'AI Engineer',
    'Machine Learning',
    'Generative AI',
    'Next.js Portfolio',
    'React Developer',
  ],
  authors: [{ name: 'Ayus Dubey' }],
  creator: 'Ayus Dubey',
  publisher: 'Ayus Dubey',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.siteUrl,
    title: 'Ayus Dubey | Software Engineer Portfolio',
    description: site.summary,
    siteName: 'Ayus Dubey Portfolio',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Ayus Dubey Portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayus Dubey | Software Engineer Portfolio',
    description: site.summary,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-black text-slate-100 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
