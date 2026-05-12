import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, type PanInfo } from 'motion/react';
import { Moon, Sun, RotateCcw, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const initialCards: Card[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=300&fit=crop',
    alt: 'UI/UX Design',
    title: 'UI/UX Design',
    description: 'Wireframes, prototypes, and intuitive user experiences',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop',
    alt: 'Frontend Development',
    title: 'Frontend Development',
    description: 'Responsive, performant, pixel-perfect interfaces',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    alt: 'Backend Development',
    title: 'Backend Development',
    description: 'APIs, databases, and reliable server architecture',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    alt: 'Fullstack Solutions',
    title: 'Fullstack Solutions',
    description: 'Complete apps from idea to deployment',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
    alt: 'Web Development',
    title: 'Web Development',
    description: 'Modern websites optimized for performance and growth',
  },
];

export const CardStackSection = () => {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [isDark, setIsDark] = useState(true);
  const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  const offset = 10;
  const scaleStep = 0.06;
  const dimStep = 0.15;
  const borderRadius = 12;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring' as const,
    stiffness: 170,
    damping: 26,
  };

  const moveToEnd = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
  };

  const shuffleCards = () => {
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const resetCards = () => {
    setCards(initialCards);
    setCurrentIndex(0);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const velocity = info.velocity.y;
    const dragOffset = info.offset.y;

    if (Math.abs(dragOffset) > swipeThreshold || Math.abs(velocity) > 500) {
      if (dragOffset < 0 || velocity < 0) {
        setDragDirection('up');
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection('down');
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }

    dragY.set(0);
  };

  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-gray-950 via-black to-gray-950',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      toggleBg: 'bg-gray-800/80 hover:bg-gray-700/80',
      toggleBorder: 'border-gray-700',
      infoBox: 'bg-gray-900/90 border-gray-700',
      shadowCard: '0 25px 50px rgba(0, 0, 0, 0.7)',
      shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.4)',
      cardBorder: 'border-2 border-gray-700',
      controlBg: 'bg-gray-800/80 hover:bg-gray-700/80',
      cardInfoBg: 'bg-gradient-to-t from-black/80 to-transparent',
    },
    light: {
      bg: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      toggleBg: 'bg-white/80 hover:bg-gray-100/80',
      toggleBorder: 'border-gray-300',
      infoBox: 'bg-white/90 border-gray-300',
      shadowCard: '0 25px 50px rgba(0, 0, 0, 0.15)',
      shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.08)',
      cardBorder: 'border-2 border-gray-300',
      controlBg: 'bg-white/80 hover:bg-gray-100/80',
      cardInfoBg: 'bg-gradient-to-t from-black/75 to-transparent',
    },
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  return (
    <section className={`w-full min-h-screen flex items-center justify-center ${currentTheme.bg} transition-all duration-500 relative overflow-hidden py-20`}>
      <svg className="absolute inset-0 w-full h-full opacity-10 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="card-stack-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={isDark ? '#ffffff' : '#000000'}
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card-stack-grid)" />
      </svg>

      <div className="absolute top-8 left-5 right-5 sm:left-8 sm:right-8 flex items-center justify-between z-30">
        <div className="flex gap-2">
          <motion.button onClick={resetCards} className={`p-3 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} title="Reset">
            <RotateCcw className={`w-5 h-5 ${currentTheme.text}`} />
          </motion.button>
          <motion.button onClick={shuffleCards} className={`p-3 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} title="Shuffle">
            <Shuffle className={`w-5 h-5 ${currentTheme.text}`} />
          </motion.button>
        </div>

        <motion.button onClick={() => setIsDark(!isDark)} className={`p-3 rounded-full ${currentTheme.toggleBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-700" />}
        </motion.button>
      </div>

      <motion.button onClick={moveToStart} className={`hidden sm:block absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-20`} whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.9 }}>
        <ChevronLeft className={`w-6 h-6 ${currentTheme.text}`} />
      </motion.button>

      <motion.button onClick={moveToEnd} className={`hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-20`} whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.9 }}>
        <ChevronRight className={`w-6 h-6 ${currentTheme.text}`} />
      </motion.button>

      <div className="relative w-[min(80vw,420px)] aspect-video overflow-visible z-10">
        <ul className="relative w-full h-full m-0 p-0">
          <AnimatePresence>
            {cards.map(({ id, src, alt, title, description }, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.3, 1 - i * dimStep);
              const baseZ = cards.length - i;

              return (
                <motion.li
                  key={id}
                  className={`absolute w-full h-full list-none overflow-hidden ${currentTheme.cardBorder}`}
                  style={{
                    borderRadius: `${borderRadius}px`,
                    cursor: isFront ? 'grab' : 'auto',
                    touchAction: 'none',
                    boxShadow: isFront ? currentTheme.shadowCard : currentTheme.shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000,
                  }}
                  animate={{
                    top: `${i * -offset}%`,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: baseZ,
                    opacity: dragDirection && isFront ? 0 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={spring}
                  drag={isFront ? 'y' : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDrag={(_, info) => {
                    if (isFront) {
                      dragY.set(info.offset.y);
                    }
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={isFront ? { zIndex: cards.length + 1, cursor: 'grabbing', scale: 1.05 } : {}}
                  onHoverStart={() => isFront && setShowInfo(true)}
                  onHoverEnd={() => setShowInfo(false)}
                >
                  <img src={src} alt={alt} className="w-full h-full object-cover pointer-events-none select-none" draggable={false} />

                  <motion.div className={`absolute bottom-0 left-0 right-0 p-4 ${currentTheme.cardInfoBg}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: isFront && showInfo ? 1 : 0, y: isFront && showInfo ? 0 : 20 }} transition={{ duration: 0.2 }}>
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                    <p className="text-white/80 text-sm">{description}</p>
                  </motion.div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {initialCards.map((_, i) => (
          <motion.div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex % initialCards.length ? `${isDark ? 'bg-white' : 'bg-gray-900'} w-8` : `${isDark ? 'bg-gray-700' : 'bg-gray-300'} w-1.5`}`} whileHover={{ scale: 1.2 }} />
        ))}
      </div>

      <div className={`absolute bottom-8 left-5 right-5 sm:left-8 sm:right-8 text-center px-6 py-4 rounded-xl border ${currentTheme.infoBox} backdrop-blur-md transition-all duration-300 z-20 shadow-lg`}>
        <p className={`${currentTheme.text} text-sm font-medium`}>Drag up/down • Navigate • Shuffle • Reset</p>
        <p className={`${currentTheme.textSecondary} text-xs mt-1`}>Card {currentIndex + 1} of {initialCards.length} • {isDark ? 'Dark' : 'Light'} Mode</p>
      </div>
    </section>
  );
};
