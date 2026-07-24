"use client";

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { navItems, site } from '@/constants/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from '@/hooks/useTheme';

type AppShellProps = {
  children: React.ReactNode;
};

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, delay: 0.7 }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950"
      aria-label="Loading screen"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="mx-auto mb-5 h-16 w-16 rounded-full border-2 border-white/10 border-t-sky-400 border-r-fuchsia-400"
        />
        <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Loading portfolio</p>
      </div>
    </motion.div>
  );
}

function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <>
      <span className="custom-cursor-ring" style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }} />
      <span className="custom-cursor-dot" style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }} />
    </>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 720);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/85 text-white shadow-glass backdrop-blur-xl transition-transform hover:-translate-y-1 hover:bg-slate-900 md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUpRight size={18} className="rotate-[-45deg]" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="fixed inset-x-0 top-0 z-[110] h-1 origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-500" style={{ transform: `scaleX(${progress / 100})` }} />;
}

function BackgroundEffects() {
  const reduceMotion = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 11) % 100}%`,
        top: `${(index * 17) % 100}%`,
        duration: 12 + (index % 5) * 2,
        delay: index * 0.35,
        size: 8 + (index % 4) * 4,
      })),
    [],
  );

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[size:120px_120px] opacity-[0.08] mix-blend-screen [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] animate-gridMove" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-12%] top-20 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-drift" />
        <div className="absolute right-[-8%] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-drift [animation-delay:2s]" />
        <div className="absolute left-[24%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl animate-drift [animation-delay:4s]" />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-sky-400/50 via-fuchsia-400/40 to-cyan-300/40 blur-[1px]"
            style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
            animate={{ y: [0, -32, 0], opacity: [0.15, 0.75, 0.15], scale: [1, 1.35, 1] }}
            transition={{ duration: particle.duration, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
          />
        ))}
      </div>
    </>
  );
}

export function AppShell({ children }: AppShellProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const activeSection = useActiveSection(navItems.map((item) => item.href.slice(1)));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <ScrollProgress />
      <BackgroundEffects />
      <CustomCursor />
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {children}
      </motion.main>
      <ScrollToTopButton />
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
    </div>
  );
}
