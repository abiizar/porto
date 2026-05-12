export const WorkTogetherSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A0B0A] px-5 pt-16 pb-0 text-[#D7E2EA] sm:px-8 md:px-10 md:pt-20">
      <img
        src="https://static.codia.ai/s/image_fdf95d1b-2d91-40d9-9435-ceadac1e0509.png"
        alt=""
        className="pointer-events-none absolute left-4 top-1/2 hidden h-[69px] w-[70px] -translate-y-1/2 object-contain md:block"
      />
      <img
        src="https://static.codia.ai/s/image_a3a150dc-8d7f-4ecf-8623-bd7d4c55828b.png"
        alt=""
        className="pointer-events-none absolute right-4 top-1/2 hidden h-[83px] w-[75px] -translate-y-1/2 object-contain md:block"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h2 className="hero-heading text-[clamp(2.4rem,7vw,5rem)] font-black uppercase leading-none tracking-tight">
          Let&apos;s Build Something That Works.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-[#D7E2EA]/55 sm:text-base">
          Have a product idea, an AI integration project, or a web app you need shipped? I&apos;m open to freelance projects, collaborations, and full-time opportunities.
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@abiizar.me&su=Project%20Inquiry&body=Hi%20Abizar%2C%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.%0A%0A" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/10 px-8 text-sm font-bold uppercase tracking-wider text-[#D7E2EA] shadow-[0_0_30px_rgba(215,226,234,0.08)] backdrop-blur transition-all hover:border-[#D7E2EA]/35 hover:bg-[#D7E2EA]/15 hover:scale-[1.02] active:scale-95">
            <img src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" alt="" className="h-6 w-6 object-contain" />
            Email
          </a>
          <a href="https://wa.me/6285124164885" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#B600A8]/30 bg-[#18011F]/80 px-8 text-sm font-bold uppercase tracking-wider text-[#D7E2EA] shadow-[0_0_35px_rgba(182,0,168,0.15)] backdrop-blur transition-all hover:border-[#B600A8]/50 hover:bg-[#24042E] hover:scale-[1.02] active:scale-95">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" className="h-6 w-6 object-contain" />
            WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs uppercase tracking-wider text-[#D7E2EA]/45 sm:text-sm">
          Typical response time: within 24 hours.
        </p>
      </div>

      <footer className="mt-14 border-t-[3px] border-[#121312]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-0 py-5 text-[0.62rem] uppercase tracking-[0.03em] text-[#8F8F90] lg:flex-row md:px-4">
          <div className="text-[22px] font-black leading-none tracking-[-0.04em] text-[#DFDFDF]">AB</div>
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="normal-case text-[#696969]">© 2026 Abizar. All rights reserved.</p>
            <p className="normal-case text-[#696969]">Fullstack Developer & AI Engineer · Indonesia</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-5">
            <a href="#about" className="hover:text-[#CCCCCC]">About</a>
            <a href="#projects" className="hover:text-[#CCCCCC]">Projects</a>
            <a href="#services" className="hover:text-[#CCCCCC]">Services</a>
            <a href="#contact" className="hover:text-[#CCCCCC]">Contact</a>
          </nav>
          <nav className="flex flex-wrap justify-center gap-4 normal-case">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-[#CCCCCC]">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[#CCCCCC]">LinkedIn</a>
            <span>·</span>
            <a href="mailto:hello@abiizar.me" className="hover:text-[#CCCCCC]">hello@abiizar.me</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};
