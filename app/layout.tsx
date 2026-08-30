import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/data/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [
    'developer',
    'portfolio',
    'Next.js',
    'React',
    'TypeScript',
    'web development',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.portfolioUrl,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='bg-black text-white'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
