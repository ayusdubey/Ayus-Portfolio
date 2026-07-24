"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { navItems, site } from '@/constants/portfolio';
import { downloadFromUrl } from '@/utils/download';
import type { ThemeMode } from '@/hooks/useTheme';

type NavbarProps = {
  activeSection: string;
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="glass-card-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 shadow-glass backdrop-blur-2xl sm:px-5">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
          <span className="gradient-text">Ayus</span> Dubey
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-white/12 text-white shadow-glow'
                  : 'text-slate-300 hover:bg-white/8 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-transform duration-300 hover:scale-105 hover:bg-white/10"
            aria-label="Toggle dark and light mode"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <a
            href={site.resumePath}
            download="Ayus Dubey org..pdf"
            onClick={async (event) => {
              event.preventDefault();

              try {
                await downloadFromUrl(site.resumePath, 'Ayus Dubey org..pdf');
              } catch {
                window.location.href = site.resumePath;
              }
            }}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Download Resume <FiDownload />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-transform duration-300 hover:scale-105 hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="glass-card-strong mx-auto mt-3 max-w-7xl rounded-3xl p-4 shadow-glass lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
