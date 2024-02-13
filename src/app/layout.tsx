import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import { metaTags } from '@/siteConfig';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EBGaramond = EB_Garamond({
  weight: ['400', '500', '600', '700', '800'],
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
      <body className={EBGaramond.className}>
        <Navbar />
        <main className="flex flex-col items-center min-h-[700px] w-[440px] m-auto">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
