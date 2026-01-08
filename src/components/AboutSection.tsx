import StyledLink from '@/components/StyledLink';
import Image from 'next/image';
import BadgeNew from '@/components/svg/badge-new.svg';

const projects = [
    {
        name: 'archiwum kulinarne',
        description: 'Collection of family recipes preserved digitally',
        url: 'https://archiwumkulinarne.deadbrain.dev',
        isNew: false,
    },
    {
        name: 'lofi.today',
        description: 'Minimalist lofi music player for focus',
        url: 'https://lofi.deadbrain.dev',
        isNew: false,
    },
    {
        name: 'zolteSTUDIO',
        description: '3D printing service and calculator',
        url: 'https://zoltestudio.pl',
        isNew: true,
    },
];


const quotes = [
    'The best error message is the one that never shows up.',
    'First, solve the problem. Then, write the code.',
    'Code is like humor. When you have to explain it, it is bad.',
    'Simplicity is the soul of efficiency.',
    'Talk is cheap. Show me the code.',
];

export default function AboutSection() {
    // Get a "random" quote based on day of year for consistency
    const dayOfYear = Math.floor(
        (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const quote = quotes[dayOfYear % quotes.length];

    return (
        <div className="w-full m-auto px-4 sm:max-w-[600px] mt-8">
            {/* Quote of the day */}
            <section className="mb-8 text-center">
                <p className="text-sm italic text-muted">
                    &quot;{quote}&quot;
                </p>
                <span className="text-xs text-muted">-- quote of the day --</span>
            </section>

            {/* ASCII Divider */}
            <div className="text-center text-muted text-xs mb-8 font-mono">
                - - - - - * - - - - -
            </div>

            {/* Projects */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold border-b-2 border-primary pb-1 mb-4">
                    :: Projects
                </h2>
                <ul className="space-y-3">
                    {projects.map((project) => (
                        <li key={project.name} className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="text-accent font-bold">&raquo;</span>
                                <StyledLink href={project.url} className="font-bold" primary external>
                                    {project.name}
                                </StyledLink>
                                {project.isNew && (
                                    <Image
                                        src={BadgeNew}
                                        alt="New"
                                        className="w-auto h-[20px] -rotate-[20deg] -translate-x-1 -translate-y-2"
                                    />
                                )}
                            </div>
                            <p className="text-sm text-muted ml-5">{project.description}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Guestbook teaser */}
            <section className="mb-8 p-4 border-2 border-dashed border-accent">
                <h3 className="text-xl font-bold mb-2">Sign my guestbook!</h3>
                <p className="text-sm text-muted mb-2">
                    Leave a message and let me know you visited.
                </p>
                <StyledLink href="/contact" primary>
                    Go to guestbook &raquo;
                </StyledLink>
            </section>

            {/* Last updated */}
            <div className="text-center text-xs text-muted mb-4">
                Last updated: January 2026
            </div>
        </div>
    );
}
