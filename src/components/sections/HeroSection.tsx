import { FadeIn, ContactButton, Magnet } from '../ui';

export const HeroSection = () => {
  return (
    <section className="h-screen min-h-[620px] flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} as="header" className="flex justify-center items-center px-4 sm:px-6 md:px-10 pt-6 md:pt-8 z-50 text-[#D7E2EA]">
        <nav className="flex gap-6 sm:gap-12 md:gap-16 lg:gap-28 font-medium uppercase tracking-wider text-[0.65rem] sm:text-sm md:text-base lg:text-[1.2rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Services</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
        </nav>
      </FadeIn>

      <div className="mt-3 sm:mt-6 md:mt-8">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.85] whitespace-nowrap w-full text-[15vw] sm:text-[13.5vw] md:text-[14vw] lg:text-[15vw] text-center">
              Hi, i&apos;m abizar
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="flex-1 flex lg:hidden flex-col items-center justify-center z-10 -mt-2 sm:-mt-4 md:-mt-6">
        <FadeIn delay={0.6} y={30} className="w-[min(88vw,480px)] sm:w-[480px] md:w-[560px] pointer-events-none">
          <div className="pointer-events-auto flex justify-center">
            <Magnet padding={150} strength={3}>
              <img src="https://snapnot-r2-worker.yumtive.workers.dev/get/7d121daa-1703-404f-8206-53493d33372a/1778943728313_zouern_836ff1c9-6e45-4d6b-b873-1d44076dd8ea_removalai_preview.webp" alt="Abizar" className="w-full h-auto object-contain" />
            </Magnet>
          </div>
        </FadeIn>
      </div>

      <div className="flex lg:hidden flex-col items-center gap-3 pb-6 sm:pb-8 px-5 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[0.7rem] sm:text-sm md:text-base text-center max-w-[280px] sm:max-w-[420px] opacity-90">
            Fullstack developer building clean, scalable web apps with practical AI integration.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex flex-wrap justify-center gap-3">
          <a href="#projects" className="inline-flex rounded-full uppercase tracking-widest text-[#D7E2EA] font-medium px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline outline-2 outline-[#D7E2EA]/70 -outline-offset-4 active:scale-95 transition-transform hover:scale-[1.02]">
            See My Work
          </a>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="hidden lg:flex flex-1" />

      <div className="hidden lg:flex justify-between items-end pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[260px] md:max-w-[320px] opacity-90">
            Fullstack developer building clean, scalable web apps with practical AI integration.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex flex-wrap justify-end gap-3">
          <a href="#projects" className="inline-flex rounded-full uppercase tracking-widest text-[#D7E2EA] font-medium px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline outline-2 outline-[#D7E2EA]/70 -outline-offset-4 active:scale-95 transition-transform hover:scale-[1.02]">
            See My Work
          </a>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn delay={0.6} y={30} className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10 lg:w-[420px] xl:w-[500px] 2xl:w-[580px] bottom-0 pointer-events-none">
        <div className="pointer-events-auto flex justify-center">
          <Magnet padding={150} strength={3}>
            <img src="https://snapnot-r2-worker.yumtive.workers.dev/get/7d121daa-1703-404f-8206-53493d33372a/1778943728313_zouern_836ff1c9-6e45-4d6b-b873-1d44076dd8ea_removalai_preview.webp" alt="Abizar" className="w-full h-auto object-contain" />
          </Magnet>
        </div>
      </FadeIn>
    </section>
  );
};
