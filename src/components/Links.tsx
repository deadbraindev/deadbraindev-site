import Link from 'next/link';
import BadgeNew from '@/components/svg/badge-new.svg';
import Image from 'next/image';

export default function Links() {
  return (
    <div className="w-full m-auto sm:max-w-[450px] px-4 min-h-[300px]">
      <span className="text-3xl font-bold">Pinned sites:</span>
      <ul className=" text-2xl">
        <li className="flex flex-row gap-1 items-center">
          <Link
            href="https://archiwumkulinarne.deadbrain.dev"
            className="underline text-bluePrimary font-bold hover:text-blueSecondary"
          >
            archiwum kulinarne
          </Link>
          <Image
            src={BadgeNew}
            alt="Badge for new site"
            className="w-auto h-[20px] pb-1"
          />
        </li>
        <li className="">
          <Link
            href="https://lofi.today"
            className="underline text-bluePrimary font-bold hover:text-blueSecondary"
          >
            lofi.today
          </Link>
        </li>
      </ul>
    </div>
  );
}
