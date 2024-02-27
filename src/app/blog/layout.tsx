import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "what's new?",
};

export default function BlogPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
