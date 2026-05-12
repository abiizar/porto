import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Plus, Copy, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProfileContactSectionProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string;
  glowText?: string;
  className?: string;
}

export const ProfileContactSection = ({
  name = 'Abizar',
  role = 'Freelance UI/UX Designer & Fullstack Developer',
  email = 'hello@abizar.dev',
  avatarSrc = 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
  statusText = 'Available for work',
  statusColor = 'bg-fuchsia-500',
  glowText = 'Currently high on creativity',
  className,
}: ProfileContactSectionProps) => {
  const [copied, setCopied] = useState(false);

  const timeText = useMemo(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, '0');
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${hour12}:${m}${ampm}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn('relative mx-auto w-full max-w-sm', className)}
      >
        <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[90%] z-0 rounded-[28px] bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] shadow-[0_40px_80px_-16px_rgba(181,1,167,0.85)]" />

        <div className="absolute inset-x-0 -bottom-10 z-0 mx-auto w-full">
          <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-sm font-medium text-white">
            <Zap className="h-4 w-4" /> {glowText}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full overflow-visible rounded-[20px] border border-[#B600A8]/30 bg-white/5 text-[#D7E2EA] shadow-[0_20px_70px_-30px_rgba(181,1,167,0.75)] backdrop-blur-xl">
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className={cn('inline-block h-2.5 w-2.5 animate-pulse rounded-full', statusColor)} />
                <span className="select-none">{statusText}</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Clock className="h-4 w-4" />
                <span className="tabular-nums">{timeText}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
              <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-[20px] ring-2 ring-white/10">
                <img src={avatarSrc} alt={`${name} avatar`} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 text-center">
                <h3 className="truncate text-xl font-semibold tracking-tight sm:text-3xl">{name}</h3>
                <p className="mt-0.5 text-sm text-neutral-400">{role}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href="mailto:hello@abizar.dev" className="contact-btn-grad flex h-12 items-center justify-start gap-3 rounded-2xl px-4 text-sm font-medium text-white outline outline-2 outline-white -outline-offset-4 transition-transform hover:scale-[1.02] active:scale-95">
                <Plus className="h-4 w-4" /> Hire Me
              </a>

              <button onClick={handleCopy} className="contact-btn-grad flex h-12 items-center justify-start gap-3 rounded-2xl px-4 text-sm font-medium text-white outline outline-2 outline-white -outline-offset-4 transition-transform hover:scale-[1.02] active:scale-95">
                <Copy className="h-4 w-4" /> {copied ? 'Copied' : 'Copy Email'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
