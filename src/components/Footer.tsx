import StyledLink from '@/components/StyledLink';
import VisitorCounter from '@/components/VisitorCounter';

export default function Footer() {
  return (
    <footer className="flex flex-col m-auto bottom-0 text-center items-center justify-center py-4 w-full border-t-1 gap-3">
      <nav className="flex flex-row flex-wrap items-center justify-center w-full">
        <StyledLink href="/me" className="px-2">
          About me
        </StyledLink>
        <span className="font-bold text-sm">|</span>
        <StyledLink href="/contact" className="px-2">
          Contact
        </StyledLink>
        <span className="font-bold text-sm">|</span>
        <StyledLink href="https://github.com/deadbraindev" className="px-2" external>
          Github
        </StyledLink>
      </nav>

      {/* Real visitor counter using Vercel KV */}
      <VisitorCounter />

      {/* Webring style navigation */}
      <div className="flex flex-row items-center gap-2 text-sm">
        <span>«</span>
        <span className="text-xs">deadbrain webring</span>
        <span>»</span>
      </div>

      <span className="text-base">Made in Poland • 2024-{new Date().getFullYear()}</span>
    </footer>
  );
}
