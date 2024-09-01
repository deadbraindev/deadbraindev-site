import Image from 'next/image';
import StyledLink from '@/components/StyledLink';
import cake404 from '@/assets/cake-notfound.svg';

export default function NotFound() {
  return (
    <>
      <div className="flex flex-row items-center py-12">
        <Image
          priority
          src={cake404}
          alt="cake"
          className="w-40 sm:w-48 h-auto"
        />
        <h1 className="sr-only">Error 404, page not found.</h1>
        <h2 className="text-4xl sm:text-6xl text-center font-bold leading-none not-sr-only min-w-[4lh]">
          404
          <br />
          page
          <br />
          not
          <br />
          found
        </h2>
      </div>
      <StyledLink href="/" className="font-bold" primary>
        Back to Home Page
      </StyledLink>
    </>
  );
}
