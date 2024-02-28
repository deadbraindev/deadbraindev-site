import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about me',
};

export default function MePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
