import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-center min-w-[350px] max-w-[440px] m-auto text-2xl px-2 py-4 leading-none">
      <span>[</span>
      <Link href="/" className="px-2">
        <span className="underline text-blueLink">Home</span>
      </Link>
      <span className="font-bold">|</span>
      <Link href="/testpage" className="px-2">
        <span className="underline text-blueLink">What&apos;s new?</span>
      </Link>
      <span className="font-bold">|</span>
      <Link href="/testpage" className="px-2">
        <span className="underline text-blueLink">Contact</span>
      </Link>
      <span>]</span>
    </nav>
  );
}
