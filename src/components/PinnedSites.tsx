import BadgeNew from '@/components/svg/badge-new.svg';
import Image from 'next/image';
import StyledLink from '@/components/StyledLink';

export default function PinnedSites() {
  return (
    <div className="w-full m-auto px-4 sm:max-w-[450px]">
      <h2 className="text-3xl font-bold">Pinned sites:</h2>
      <ul className="mt-2">
        <li className="flex flex-row gap-1 items-center">
          <span className="text-pink font-bold">»</span>
          <StyledLink
            href="https://archiwumkulinarne.deadbrain.dev"
            className="font-bold"
            primary
          >
            archiwum kulinarne
          </StyledLink>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <span className="text-pink font-bold">»</span>
          <StyledLink href="https://lofi.deadbrain.dev" className="font-bold" primary external>
            lofi.today
          </StyledLink>
        </li>
        <li className="flex flex-row gap-1 items-center">
          <span className="text-pink font-bold">»</span>
          <StyledLink
            href="https://zoltestudio.pl"
            className="font-bold"
            primary
            external
          >
            żółteSTUDIO
          </StyledLink>
          <Image
            src={BadgeNew}
            alt="Badge for new site"
            className="w-auto h-[20px] -rotate-[20deg] -translate-x-1 -translate-y-2 "
          />
        </li>
      </ul>
    </div>
  );
}
