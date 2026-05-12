import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={containerRef} className={className}>
      {text.split("").map((char, i) => {
        const start = i / text.length;
        const end = start + (1 / text.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={i} className="relative inline-block whitespace-pre">
            <span className="invisible">{char}</span>
            <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
