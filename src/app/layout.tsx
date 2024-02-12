/* eslint-disable react/style-prop-object */
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google';
import { Courier_Prime } from 'next/font/google';
import './globals.css';
import { metaTags } from '@/siteConfig';
import Navbar from '@/components/Navbar';
import { YouTubeEmbed } from '@next/third-parties/google';

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
        <div className="w-full sticky top-[-220px] z-50 hover:top-0 pb-10 bg-slate-800">
          <YouTubeEmbed
            videoid="l0V2VWfsVNM"
            // height={480}
            params="rel=0&controls=1&autoplay=1&color=white&modestbranding=1&rel=0&iv_load_policy=3"
            playlabel="turn on the music"
            style="overflow: hidden; aspect-ratio: 4 / 3; background-image: url('https://lofi.today/images/lofitoday-og-default.jpg');"
          />
          <span className="flex flex-col items-center text-white">
            focus = show player
          </span>
        </div>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
