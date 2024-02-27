import Image from 'next/image';
import cake from '@/components/svg/cake.svg';

export default function Hero() {
  return (
    <div className="flex flex-row items-center py-12">
      <Image
        priority
        src={cake}
        alt="Pixelated image of a cake with a candle"
        className="w-40 sm:w-48 h-auto"
      />
      <h1 className="sr-only">Welcome to my web site!</h1>
      <h2 className="text-4xl sm:text-6xl text-center font-bold leading-none not-sr-only">
        Welcome
        <br />
        to my
        <br />
        web
        <br />
        site!
      </h2>
    </div>
  );
}
