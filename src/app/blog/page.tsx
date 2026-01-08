import StyledLink from '@/components/StyledLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on web development, projects, and retro aesthetics.',
};

export default function BlogPage() {
  return (
    <div className="w-full m-auto px-4 sm:max-w-[600px] py-8">
      {/* Page header */}
      <h1 className="text-4xl font-bold border-b-2 border-primary pb-2 mb-6">
        :: What&apos;s new?
      </h1>

      {/* Intro section */}
      <section className="mb-8">
        <p className="mb-4">
          Welcome to my blog. Here I share thoughts about web development,
          projects I&apos;m working on, and other things I find interesting.
        </p>
        <p className="text-sm text-muted">
          [ RSS feed coming soon ]
        </p>
      </section>

      {/* ASCII Divider */}
      <div className="text-center text-muted text-xs mb-8 font-mono" aria-hidden="true">
        - - - - - * - - - - -
      </div>

      {/* Empty state */}
      <section className="text-center py-12 border border-dashed border-border">
        <div className="mb-4 font-mono text-muted" aria-hidden="true">
          <pre className="text-xs sm:text-sm">
            {`   _____
  /     \\
 | () () |
  \\  ^  /
   |||||
   |||||`}
          </pre>
        </div>
        <h2 className="text-2xl font-bold mb-2">No posts yet</h2>
        <p className="text-muted mb-4">
          The blog is empty for now. Check back later!
        </p>
        <p className="text-sm">
          <StyledLink href="/" primary>
            &laquo; Back to home
          </StyledLink>
        </p>
      </section>

      {/* Future posts teaser */}
      <section className="mt-8 p-4 border border-border bg-card">
        <h3 className="font-bold mb-2">Coming soon:</h3>
        <ul className="text-sm text-muted space-y-1">
          <li>[_] How I built this site</li>
          <li>[_] My development setup</li>
          <li>[_] Adventures in 3D printing</li>
        </ul>
      </section>
    </div>
  );
}
