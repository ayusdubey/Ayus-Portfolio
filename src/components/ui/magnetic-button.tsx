"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { downloadFromUrl } from '@/utils/download';

type MagneticButtonProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  download?: string;
};

export function MagneticButton({ href, label, variant = 'primary', download }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.25 });
  const translateX = useTransform(springX, (value) => `${value}px`);
  const translateY = useTransform(springY, (value) => `${value}px`);

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={async (event) => {
        if (!download) {
          return;
        }

        event.preventDefault();

        try {
          await downloadFromUrl(href, download);
        } catch {
          window.location.href = href;
        }
      }}
      onMouseMove={(event) => {
        const element = ref.current;
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((event.clientX - centerX) * 0.18);
        y.set((event.clientY - centerY) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: translateX, y: translateY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={
        variant === 'primary'
          ? 'inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform'
          : variant === 'secondary'
            ? 'inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10'
            : 'inline-flex items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 px-6 py-3.5 text-sm font-semibold text-sky-100 transition-all hover:bg-sky-500/16'
      }
    >
      {label}
    </motion.a>
  );
}
