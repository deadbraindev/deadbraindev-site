import BadgeNew from '@/components/svg/badge-new.svg';
import Image from 'next/image';
import StyledLink from '@/components/StyledLink';

export default function PinnedSites() {
  return (
    <div className="w-full m-auto px-4 sm:max-w-[450px]">
      <h2 className="text-3xl font-bold">Pinned sites:</h2>
      <ul>
        <li className="flex flex-row gap-1 items-center">
          <StyledLink
            href="https://archiwumkulinarne.deadbrain.dev"
            className="font-bold"
            primary
          >
            archiwum kulinarne
          </StyledLink>
          <Image
            src={BadgeNew}
            alt="Badge for new site"
            className="w-auto h-[20px] pb-1"
          />
        </li>
        <li>
          <StyledLink href="https://lofi.today" className="font-bold" primary>
            lofi.today
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}
