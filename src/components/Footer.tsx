import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col m-auto bottom-0 text-center items-center justify-center py-2 w-[350px]">
      <nav className="flex flex-row flex-wrap gap-x-1 gap-y-2 items-center justify-center text-xl px-2 py-4 leading-none">
        <Link href="/sitemap" className="px-2">
          <span className="underline text-bluePrimary hover:text-blueSecondary">
            Site map
          </span>
        </Link>
        <span className="font-bold">|</span>
        <Link href="/contact" className="px-2">
          <span className="underline text-bluePrimary hover:text-blueSecondary">
            Contact
          </span>
        </Link>
        <span className="font-bold">|</span>
        <Link href="https://github.com/deadbraindev" className="px-2">
          <span className="underline text-bluePrimary hover:text-blueSecondary">
            Github
          </span>
        </Link>
        {/* <Link href="/" className="px-2">
          <span className="underline text-bluePrimary">Link 1</span>
        </Link>
        <span className="font-bold">|</span>
        <Link href="/" className="px-2">
          <span className="underline text-bluePrimary">Link 2</span>
        </Link> */}
      </nav>
      {/* <span className="text-[16px]">Last updated: 26-02-2024, 16:15:52</span> */}

      {/* <span>PL </span> */}
      <span className="text-[16px]">Made in Poland • 2024-2024</span>
    </footer>
  );
}
