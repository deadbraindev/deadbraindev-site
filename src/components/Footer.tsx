import StyledLink from '@/components/StyledLink';

export default function Footer() {
  return (
    <footer className="flex flex-col m-auto bottom-0 text-center items-center justify-center py-4 w-full border-t-[1px] gap-2">
      <nav className="flex flex-row flex-wrap items-center justify-center w-full">
        <StyledLink href="/me" className="px-2">
          About me
        </StyledLink>
        <span className="font-bold text-sm">|</span>
        <StyledLink href="/contact" className="px-2">
          Contact
        </StyledLink>
        <span className="font-bold text-sm">|</span>
        <StyledLink href="https://github.com/deadbraindev" className="px-2">
          Github
        </StyledLink>
      </nav>
      <span className="text-base">Made in Poland • 2024-2025</span>
    </footer>
  );
}
