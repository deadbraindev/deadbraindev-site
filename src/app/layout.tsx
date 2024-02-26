import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Old_Standard_TT } from 'next/font/google';
import './globals.css';
import { metaTags } from '@/siteConfig';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OldStandardTT = Old_Standard_TT({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `home page • ${metaTags.title} `,
    template: `%s • ${metaTags.title}`,
  },
  description: metaTags.description,
  metadataBase: metaTags.metadataBase,
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/icons/favicon.png',
    shortcut: '/icons/apple-icon-180.png',
    apple: '/icons/apple-icon-180.png',
  },
  appleWebApp: {
    title: 'deadbrain.dev',
  },
  publisher: 'deadbrain.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OldStandardTT.className}>
        <main className="flex flex-col items-center h-[100%]">
          <Navbar />

          {children}
          <div className="flex-grow" />
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
