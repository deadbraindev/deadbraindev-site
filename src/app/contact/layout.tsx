import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'contact',
};

export default function ContactPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
