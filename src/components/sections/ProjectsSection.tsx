import { LiveProjectButton } from '../ui';

const projects = [
  {
    num: '01',
    name: 'NEXORA TECH',
    headline: 'AI Content Automation',
    sub: 'Scaling content workflow with GPT-5 integration.',
    image: 'https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765181_st14ls_1.webp',
  },
  {
    num: '02',
    name: 'VANGUARD FINANCE',
    headline: 'Financial Growth Platform',
    sub: 'Empowering businesses with smart investment tools.',
    image: 'https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765184_rqj7w_3.webp',
  },
  {
    num: '03',
    name: 'AETHERA SYSTEMS',
    headline: 'Intelligent Tools for Creators',
    sub: 'Minimal AI assistant for complex creative tasks.',
    image: 'https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765183_v5ssks_2.webp',
  },
  {
    num: '04',
    name: 'BRANDLY AGENCY',
    headline: 'Resonance Identity System',
    sub: 'High-impact visual narratives for modern startups.',
    image: 'https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778498775550_ikh88_belum.webp',
  },
  {
    num: '05',
    name: 'DATAVUE ANALYTICS',
    headline: 'Predictive Insight Dashboard',
    sub: 'Converting complex data into business decisions.',
    image: 'https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765186_lhvt9h_4.webp',
  },
  {
    num: '06',
    name: 'NOVA STUDIO',
    headline: 'All-in-One CRM Platform',
    sub: 'Sophisticated dashboard to manage project lifecycle.',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="w-full">
      <div className="w-full rounded-[28px] sm:rounded-[34px] md:rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-5 md:p-6 flex flex-col gap-4">
        <div className="flex flex-col xl:flex-row items-start xl:items-center xl:justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-5 w-full min-w-0 xl:flex-1">
             <span className="font-black text-[#D7E2EA] text-[clamp(2.25rem,5vw,72px)] leading-none">{project.num}</span>
             <div className="flex flex-col gap-1 flex-1 min-w-0">
               <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-wider">{project.name}</span>
               <h3 className="font-medium text-[#D7E2EA] text-base sm:text-lg md:text-xl uppercase tracking-wide leading-tight">{project.headline}</h3>
               <p className="text-[#D7E2EA]/55 text-xs sm:text-sm max-w-xl">{project.sub}</p>
             </div>
          </div>
          <LiveProjectButton className="w-full xl:w-auto xl:shrink-0" />
        </div>

        <div className="w-full">
          <img src={project.image} className="aspect-[4/3] w-full max-h-[360px] object-cover rounded-[22px] sm:rounded-[28px] md:rounded-[34px]" alt={project.headline} />
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 pb-8">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
        Projects
      </h2>

      <div className="mx-auto -mt-10 mb-12 max-w-3xl text-center sm:-mt-14 md:-mt-20 md:mb-16">
        <p className="text-lg font-semibold uppercase tracking-wide text-[#D7E2EA] sm:text-xl">Real systems. Real impact. Shipped.</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#D7E2EA]/60 sm:text-base">
          A selection of fullstack and AI-integrated projects built with production-grade architecture and real-world use cases.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.num} project={proj} />
        ))}
      </div>
    </section>
  );
};
