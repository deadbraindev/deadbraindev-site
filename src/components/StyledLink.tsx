import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function StyledLink({
  children,
  href,
  className,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={twMerge(
        'underline text-bluePrimary hover:text-blueSecondary leading-none',
        className,
        primary ? 'text-2xl' : 'text-base',
      )}
    >
      {children}
    </Link>
  );
}

StyledLink.defaultProps = {
  className: null,
  primary: false,
};
