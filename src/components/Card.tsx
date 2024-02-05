import Link from 'next/link';

export default function Card(props: { url: string; title: string }) {
  const { url, title } = props;
  return (
    <div className="px-8 py-4 text-xl bg-transparent w-80 text-center border-2 border-black dark:border-white rounded-3xl hover:bg-white hover:text-black hover:cursor-pointer transition-all duration-100 ease-out">
      <Link className="font-bold" href={url}>
        {title}
      </Link>
    </div>
  );
}
