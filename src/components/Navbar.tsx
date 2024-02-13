import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between min-w-[350px] max-w-[440px]  m-auto">
      <Link href="/" className="py-6 px-4 text-2xl ">
        <span className="underline underline-offset-4 ">[ Home ]</span>
      </Link>
      <Link href="/" className="py-6 px-4 text-2xl">
        <span className="underline underline-offset-4">[ Menu ]</span>
      </Link>
    </nav>
  );
}
