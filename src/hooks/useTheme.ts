"use client";

import { useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('ayus-portfolio-theme') as ThemeMode | null;
    setTheme(stored === 'light' ? 'light' : 'dark');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('ayus-portfolio-theme', theme);
  }, [mounted, theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme, mounted };
}
