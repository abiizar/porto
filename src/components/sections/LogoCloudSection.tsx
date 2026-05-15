import { LogoCloud } from '../ui/logo-cloud';
import { FadeIn } from '../ui';

const logos = [
  {
    src: "https://svgl.app/library/react_wordmark_light.svg",
    alt: "React",
  },
  {
    src: "https://svgl.app/library/nextjs_logo_light.svg",
    alt: "Next.js",
  },
  {
    src: "https://svgl.app/library/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://svgl.app/library/tailwindcss_wordmark_light.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "https://svgl.app/library/nodejs_wordmark_light.svg",
    alt: "Node.js",
  },
  {
    src: "https://svgl.app/library/figma.svg",
    alt: "Figma",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub",
  },
];

export const LogoCloudSection = () => {
  return (
    <section className="bg-[#0C0C0C] py-6 sm:py-8 md:py-10 relative">
      <FadeIn delay={0.1} y={20} className="relative mx-auto max-w-3xl px-6">
        <h2 className="mb-5 text-center font-medium text-[#D7E2EA] text-xl tracking-tight md:text-3xl">
          <span className="opacity-60">Tech stack I work with.</span>
          <br />
          <span className="font-semibold">Tools that power my craft.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-[#D7E2EA]/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-[#D7E2EA]/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </FadeIn>
    </section>
  );
};
