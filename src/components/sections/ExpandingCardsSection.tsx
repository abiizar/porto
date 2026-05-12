import { Bot, Code2, Server, Workflow, Globe2 } from 'lucide-react';
import { ExpandingCards, type CardItem } from '../ui/ExpandingCards';

const items: CardItem[] = [
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Connecting LLMs, APIs & AI models into real web applications.',
    imgSrc: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
    icon: <Bot className="h-6 w-6" />,
    linkHref: '#contact',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Responsive React/Next.js interfaces, fast & pixel-perfect.',
    imgSrc: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80',
    icon: <Code2 className="h-6 w-6" />,
    linkHref: '#contact',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Scalable APIs, databases, and server architecture.',
    imgSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    icon: <Server className="h-6 w-6" />,
    linkHref: '#contact',
  },
  {
    id: 'fullstack',
    title: 'Fullstack Solutions',
    description: 'End-to-end builds from concept to production deployment.',
    imgSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    icon: <Workflow className="h-6 w-6" />,
    linkHref: '#contact',
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Performance-optimized websites built for speed, SEO & conversion.',
    imgSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    icon: <Globe2 className="h-6 w-6" />,
    linkHref: '#contact',
  },
];

export const ExpandingCardsSection = () => {
  return (
    <section className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-2 pb-2 sm:pt-3 sm:pb-3 md:pt-4 md:pb-4 text-[#D7E2EA]">
      <div className="relative z-10 mx-auto mb-6 max-w-4xl text-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,130px)]">
          Core Expertise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm uppercase tracking-wide text-[#D7E2EA]/70 sm:text-base md:text-lg">
          What I bring to every project — from first commit to final deployment.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center">
        <ExpandingCards items={items} />
      </div>
    </section>
  );
};
