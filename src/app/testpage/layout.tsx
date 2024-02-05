import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'test page',
};

export default function TestpageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
