import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function StyledLink({
  children,
  href,
  className = '',
  primary = false,
  external,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  primary?: boolean;
  external?: boolean;
}) {
  const isExternal = external ?? (href.startsWith('http') || href.startsWith('//'));

  return (
    <Link
      href={href}
      className={twMerge(
        'underline text-bluePrimary hover:text-blueSecondary leading-none',
        className,
        primary ? 'text-2xl' : 'text-base',
      )}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}
    </Link>
  );
}
