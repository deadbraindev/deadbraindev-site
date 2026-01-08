import StyledLink from '@/components/StyledLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch via email or check out my code on GitHub.',
};

export default function ContactPage() {
  return (
    <div className="w-full m-auto px-4 sm:max-w-[600px] py-8">
      {/* Page header */}
      <h1 className="text-4xl font-bold border-b-2 border-primary pb-2 mb-6">
        :: Contact
      </h1>

      <section className="mb-8">
        <p className="mb-4">
          The best way to reach me is via email. I usually respond within 24-48 hours.
        </p>
      </section>

      {/* Contact Options */}
      <section className="border border-border bg-card p-6 mb-8">
        <ul className="space-y-4 font-mono">
          <li className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-muted min-w-[100px]">Email:</span>
            <StyledLink href="mailto:" className="text-lg">
              undefined
            </StyledLink>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-muted min-w-[100px]">GitHub:</span>
            <StyledLink href="https://github.com/deadbraindev" external className="text-lg">
              github.com/deadbraindev
            </StyledLink>
          </li>
        </ul>
      </section>

      {/* Guestbook Note */}
      <section className="p-4 border-2 border-dashed border-accent text-center">
        <h3 className="text-lg font-bold mb-2">Guestbook</h3>
        <p className="text-sm text-muted">
          ( ./guestbook.cgi not found )<br />
          Please use email for now!
        </p>
      </section>

      {/* Back link */}
      <div className="text-center mt-8">
        <StyledLink href="/" primary>
          &laquo; Back to home
        </StyledLink>
      </div>
    </div>
  );
}
