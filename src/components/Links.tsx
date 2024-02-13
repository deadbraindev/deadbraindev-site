import Link from 'next/link';

export default function Links() {
  return (
    <div className="">
      <ol className="list-decimal text-2xl">
        <li className="text-2xl p-2 ">
          <Link
            href="https://archiwumkulinarne.deadbrain.dev"
            className="underline underline-offset-4 text-blueLink"
          >
            archiwumkulinarne.deadbrain.dev
          </Link>
        </li>
        <li className="text-2xl p-2 ">
          <Link
            href="https://lofi.today"
            className="underline underline-offset-4 text-blueLink"
          >
            lofi.today
          </Link>
        </li>
        <li className="text-2xl p-2 ">
          <Link
            href="https://github.com/deadbraindev"
            className="underline underline-offset-4 text-blueLink"
          >
            github.com/deadbraindev
          </Link>
        </li>
        <li className="text-2xl p-2 ">
          <Link
            href="/testpage"
            className="underline underline-offset-4 text-blueLink"
          >
            test page
          </Link>
        </li>
      </ol>
    </div>
  );
}
