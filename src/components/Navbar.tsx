// import Link from 'next/link';

import StyledLink from '@/components/StyledLink';

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-center m-auto text-2xl py-2">
      <span>[</span>
      <StyledLink href="/" className="p-2" primary>
        Home
      </StyledLink>
      <span className="font-bold">|</span>
      <StyledLink href="/blog" className="p-2" primary>
        What&apos;s new?
      </StyledLink>
      <span className="font-bold">|</span>
      <StyledLink href="/contact" className="p-2" primary>
        Contact
      </StyledLink>
      <span>]</span>
    </nav>
  );
}
