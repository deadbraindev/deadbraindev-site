import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'site map',
};

export default function SitemapPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
