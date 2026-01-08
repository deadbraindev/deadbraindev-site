import StyledLink from '@/components/StyledLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me',
  description: 'Senior Vibe Coder & Prompt Engineer from Poland.',
};

export default function MePage() {
  return (
    <div className="w-full m-auto px-4 sm:w-[600px] py-8">
      {/* Page header */}
      <h1 className="text-4xl font-bold border-b-2 border-primary pb-2 mb-6">
        :: About me
      </h1>

      {/* Profile card */}
      <section className="mb-8 p-4 border border-border bg-card overflow-hidden">
        <div className="flex justify-center" aria-hidden="true">
          <div className="font-mono text-[14px] leading-[18px] text-black whitespace-pre overflow-x-hidden font-black overflow-y-hidden">
            {`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⢉⣉⣉⣉⣉⣉⣉⣉⣉⣉⣉⣉⣉⣉⡉⠉⠉⠉⠉⠛⠛⠛⠻⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣤⣾⣿⣿⣿⣿⠿⢛⣫⣭⣵⠶⠶⠶⠶⠶⠶⢾⣯⣭⣭⣭⣭⣭⣷⣦⣤⣤⣤⣄⣈⠉⠛⢿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⡿⠃⣠⣾⣿⣿⡿⢟⣩⡴⢚⣫⠵⠖⣚⣛⣛⣛⡛⣛⣿⣷⣶⣶⣶⣶⣶⣶⣶⡶⠶⠶⢾⣶⣾⣿⣶⣄⡈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡿⠁⣰⣿⣿⣟⣩⡶⢋⡵⢚⣥⣶⣿⣿⣿⣿⣿⣿⣿⡎⢿⣿⣿⣿⣿⣿⣷⢒⣶⣿⣿⣿⣶⣬⡙⣿⣿⣿⣿⡆⠘⣿⣿⣿
⣿⣿⣿⣿⡟⠁⣰⣿⣿⣿⣿⣿⣴⣯⣴⡿⠟⠛⠉⠉⠉⠉⠉⠛⠿⣿⣾⣿⣿⣿⣿⣿⡏⣾⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣧⠀⢿⣿⣿
⣿⣿⠟⠉⠀⠘⠛⠛⢿⣿⣿⠛⢛⣿⠋⠠⠀⠀⠀⠀⠀⠘⠻⢶⣤⡈⠙⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠙⡟⠻⠿⠿⠿⢧⡀⠙⢿
⡿⠃⡠⢪⣾⡿⠋⠉⣉⣉⠉⠛⠧⢾⣷⣶⣶⡿⠟⢁⣷⣶⣦⣄⡀⢀⣴⣿⣿⣿⣷⣄⠀⢀⣤⣴⣶⣶⣶⣾⣿⣿⣿⢿⣿⣙⠲⣍⢣⠀
⠁⣰⡇⣿⠋⢀⣼⣿⡟⠘⢿⣶⣤⣄⣀⣉⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠸⣿⣿⣿⣿⠉⠻⠋⠁⣠⢤⣄⡈⣳⢸⡇⡆
⠀⣿⡇⣿⠀⢾⠟⠋⠀⢠⣄⡈⠙⠻⢿⣿⣿⣿⠿⠿⠿⠿⣉⠋⠉⣉⣹⣿⣿⣿⣿⣿⣷⣤⡀⠙⠿⣿⣷⣶⣶⣾⡇⠘⣿⣿⠟⣸⠇⠃
⡀⠸⣇⢿⡄⠘⣿⣷⡆⠈⠿⣿⣷⣤⠀⠀⠉⠛⠛⠿⢿⣿⣿⠀⠹⡏⢉⣉⣉⣻⣿⣿⣿⠟⠁⣀⣠⣬⣛⠻⣿⡿⠁⠀⢸⡿⢞⣫⠄⢀
⣷⡄⠘⠦⣍⣚⣿⣿⣷⣄⠀⠈⠙⠻⠀⠘⢿⣶⣶⣤⣄⡀⠉⠁⠒⠻⠿⠿⢿⣿⣧⣀⣁⣠⣾⣿⣿⠿⠟⠋⠁⠀⡀⠀⠀⣿⣿⠏⢀⣾
⣿⣿⣦⡀⠐⢿⣿⣿⣿⣿⣦⠈⠳⣦⡀⠀⠀⠉⠙⠛⠿⡇⢀⣿⣶⣶⣦⣤⠀⢀⣀⣀⡀⠀⢀⣀⣤⣄⠀⢶⡷⠀⠷⠀⠀⣿⣿⠀⢸⣿
⣿⣿⣿⣿⣄⠈⢿⣿⣿⣿⣿⣷⡄⠙⠃⢸⣷⣶⣤⣀⡀⠀⠀⠉⠙⠛⠛⠛⠀⠘⠛⠛⠛⠀⠛⠛⠛⠛⠀⠘⠁⠀⠀⠀⠀⣿⣿⠀⣾⣿
⣿⣿⣿⣿⣿⣆⠈⢻⣿⣿⣿⣿⣿⣦⣄⠈⠻⢿⣿⣿⡏⠀⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠀⢿⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠙⢿⣿⢿⣿⡿⢿⣷⣦⡀⠙⠛⠀⣼⣿⣿⣿⣿⣿⠀⢸⣷⣶⣶⠄⢀⣤⣤⠀⢠⡶⠀⣰⠁⠐⠀⣼⣿⣿⠀⢸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠉⠳⢬⣙⠷⣬⣙⡻⢷⣦⣤⣀⣈⠉⠛⠛⠛⠀⠹⠿⠿⠟⠀⠸⠿⠃⠀⠛⠃⠀⠉⣀⣤⣾⣿⣿⣿⠀⢸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠉⠛⠶⣬⣙⡳⢮⣍⣛⠿⢿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣾⣿⣿⡿⢋⣿⣿⢻⣿⡀⢸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⡉⠙⠷⢶⣭⣝⣒⣚⡭⠭⢝⣛⣛⣛⣛⣛⣛⣛⣛⣛⣛⣛⣫⣥⣾⣿⠟⣋⣾⣿⡇⢸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡈⠙⠻⢿⣿⣿⣷⣶⣶⣮⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣭⣴⣾⣿⣿⡿⠁⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⠉⠉⠛⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣤⣄⣀⣈⣉⣉⣉⣉⣉⣉⣉⣉⣀⣤⣶⣿⣿⣿⣿
            `}
          </div>
        </div>
      </section>

      {/* ASCII Divider */}
      <div className="text-center text-muted text-xs mb-8 font-mono" aria-hidden="true">
        - - - - - * - - - - -
      </div>

      {/* Contact */}
      <section className="mb-8 p-4 border-2 border-dashed border-accent">
        <h3 className="text-xl font-bold mb-2">Get in touch</h3>
        <p className="text-sm text-muted mb-4">
          Want to collaborate or just say hi? I reply to emails
          eventually.
        </p>
        <div className="flex flex-wrap gap-4">
          <StyledLink href="/contact" primary>
            Contact form &raquo;
          </StyledLink>
          <StyledLink href="https://github.com/deadbraindev" primary external>
            GitHub &raquo;
          </StyledLink>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center">
        <StyledLink href="/" primary>
          &laquo; Back to home
        </StyledLink>
      </div>
    </div>
  );
}
