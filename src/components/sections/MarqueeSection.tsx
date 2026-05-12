import { useEffect, useState } from 'react';

const gifs = [
    "https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765186_lhvt9h_4.webp",
    "https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765184_rqj7w_3.webp",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765181_st14ls_1.webp",
    "https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778496765183_v5ssks_2.webp",
    "https://snapnot-r2-worker.yumtive.workers.dev/get/339963bb-3691-4229-aa9a-661abcf576f6/1778498775550_ikh88_belum.webp"
];

const midpoint = Math.ceil(gifs.length / 2);
const row1Gifs = gifs.slice(0, midpoint);
const row2Gifs = gifs.slice(midpoint);

const tripleArray = (arr: string[]) => [...arr, ...arr, ...arr];

export const MarqueeSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('marquee-section');
      if (section) {
        const sectionTop = section.offsetTop;
        const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(scrollOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = (direction: 'left' | 'right') => {
    const val = direction === 'right' ? (offset - 200) : -(offset - 200);
    return `translateX(${val}px)`;
  };

  return (
    <section id="marquee-section" className="bg-[#0C0C0C] pt-6 sm:pt-8 md:pt-10 pb-10 overflow-hidden flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 px-4 sm:hidden">
        {gifs.map((src, i) => (
          <img key={`mobile-${i}`} src={src} loading="lazy" alt="Project Thumbnail" className="h-[220px] w-full rounded-2xl object-cover" />
        ))}
      </div>

      <div
        className="hidden sm:flex gap-3"
        style={{ transform: getTransform('right'), willChange: 'transform' }}
      >
        {tripleArray(row1Gifs).map((src, i) => (
          <img key={`r1-${i}`} src={src} loading="lazy" alt="Project Thumbnail" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
        ))}
      </div>

      <div
        className="hidden sm:flex gap-3"
        style={{ transform: getTransform('left'), willChange: 'transform' }}
      >
        {tripleArray(row2Gifs).map((src, i) => (
          <img key={`r2-${i}`} src={src} loading="lazy" alt="Project Thumbnail" className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" />
        ))}
      </div>
    </section>
  );
};
