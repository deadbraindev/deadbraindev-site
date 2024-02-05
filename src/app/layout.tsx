import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google';
import { Courier_Prime } from 'next/font/google';
import './globals.css';
import { metaTags } from '@/siteConfig';
import Navbar from '@/components/Navbar';

const courierPrime = Courier_Prime({
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
