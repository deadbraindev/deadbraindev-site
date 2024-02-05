import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import { metaTags } from '@/siteConfig';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
