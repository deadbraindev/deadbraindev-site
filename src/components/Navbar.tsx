import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center my-4">
      <Link
        href="/"
        className="py-4 px-8 text-4xl bg-transparend rounded-3xl font-bold"
      >
        deadbrain.dev
      </Link>
    </nav>
  );
}
