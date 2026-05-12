import type React from 'react';

export const ContactButton = ({ className = "", children = "Contact Me" }: { className?: string; children?: React.ReactNode }) => {
  return (
    <a href="#contact" className={`contact-btn-grad inline-flex rounded-full uppercase tracking-widest text-white font-medium px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base outline outline-2 outline-white -outline-offset-4 active:scale-95 transition-transform ${className}`}>
      {children}
    </a>
  );
};
