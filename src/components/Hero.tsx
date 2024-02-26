import Image from 'next/image';
import cake from '@/components/svg/cake.svg';

export default function Hero() {
  return (
    <div className="flex flex-row items-center py-12">
      <Image priority src={cake} alt="cake" className="w-40 sm:w-48 h-auto" />
      <h1 className="text-4xl sm:text-6xl text-center font-bold leading-none">
        Welcome
        <br />
        to my
        <br />
        web
        <br />
        site!
      </h1>
    </div>
  );
}
