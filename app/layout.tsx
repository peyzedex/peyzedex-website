import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.peyzedex.com'),
  title: {
    default: 'PeyZeDex | Profesyonel Web Tasarım ve Yazılım Ajansı',
    template: '%s | PeyZeDex',
  },
  description: 'PeyZeDex markanızı dijitalde büyütür. Kurumsal web tasarım, landing page, SEO uyumlu ve dönüşüm odaklı modern web geliştirme hizmetleri. Teklif alın.',
  keywords: [
    'Web Tasarım',
    'Web Yazılım',
    'Kurumsal Web Sitesi',
    'Landing Page Tasarımı',
    'E-Ticaret Yazılımı',
    'SEO Uyumlu Web Sitesi',
    'Dijital Ajans',
    'Mobil Uyumlu Tasarım',
    'PeyZeDex',
  ],
  authors: [{ name: 'PeyZeDex', url: 'https://www.peyzedex.com' }],
  creator: 'PeyZeDex',
  publisher: 'PeyZeDex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PeyZeDex | Profesyonel Web Tasarım ve Yazılım Ajansı',
    description: 'PeyZeDex markanızı dijitalde büyütür. Kurumsal web tasarım, landing page, SEO uyumlu ve dönüşüm odaklı modern web geliştirme hizmetleri.',
    url: 'https://www.peyzedex.com',
    siteName: 'PeyZeDex Web Design',
    images: [
      {
        url: '/og-image.jpg', // You can replace this with actual OG image route
        width: 1200,
        height: 630,
        alt: 'PeyZeDex Web Tasarım ve Geliştirme Ajansı',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeyZeDex | Profesyonel Web Tasarım ve Yazılım Ajansı',
    description: 'Dönüşüm odaklı, modern ve hızlı web siteleri tasarlıyoruz. İşletmenizi internette bir adım öne taşıyın.',
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
  alternates: {
    canonical: 'https://www.peyzedex.com',
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PeyZeDex',
  url: 'https://www.peyzedex.com',
  logo: 'https://www.peyzedex.com/logo.png', // Update with actual URL later
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905333333333', // update with real
    contactType: 'customer service',
    availableLanguage: 'Turkish',
  },
  sameAs: [
    'https://www.instagram.com/peyzedex',
    'https://www.linkedin.com/company/peyzedex',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans text-white bg-background min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
