import Image from 'next/image';
import cake from '@/components/svg/cake.svg';

export default function Hero() {
  return (
    <div className="flex flex-row items-center gap-4 h-52 mb-8">
      <Image priority src={cake} alt="cake" className="w-32 h-auto" />
      <h1 className="text-3xl w-[100px] text-center font-semibold">
        Welcome to my new page!
      </h1>
    </div>
  );
}
