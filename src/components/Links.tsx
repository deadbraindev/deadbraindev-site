import Link from 'next/link';

export default function Links() {
  return (
    <div className="w-full m-auto sm:max-w-[450px] px-4">
      <span className="text-xl">Pinned sites:</span>
      <ul className=" text-2xl">
        <li className="">
          <Link
            href="https://archiwumkulinarne.deadbrain.dev"
            className="underline text-blueLink font-bold"
          >
            archiwum kulinarne
            <span className="text-sm bg-[yellow] rounded-md">new</span>
          </Link>
        </li>
        <li className="">
          <Link
            href="https://lofi.today"
            className="underline text-blueLink font-bold"
          >
            lofi.today
            {/* → */}
          </Link>
        </li>
      </ul>
    </div>
  );
}
