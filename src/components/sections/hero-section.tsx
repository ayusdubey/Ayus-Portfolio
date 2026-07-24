"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { heroStats, heroTitles, site } from '@/constants/portfolio';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { useTypingText } from '@/hooks/useTypingText';

const socialLinks = [
  { label: 'LinkedIn', href: site.linkedin, icon: <FaLinkedinIn /> },
  { label: 'GitHub', href: site.github, icon: <FaGithub /> },
  { label: 'Email', href: `mailto:${site.email}`, icon: <MdOutlineMail /> },
] as const;

export function HeroSection() {
  const [activeTitle, setActiveTitle] = useState(0);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const subtitle = useTypingText(['Building scalable AI software.', 'Crafting premium web experiences.', 'Turning ideas into systems.']);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTitle((current) => (current + 1) % heroTitles.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!titleRef.current) {
      return;
    }

    gsap.fromTo(
      titleRef.current,
      { y: 18, opacity: 0, filter: 'blur(4px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' },
    );
  }, [activeTitle]);

  const currentTitle = useMemo(() => heroTitles[activeTitle], [activeTitle]);

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-sky-500/18 blur-3xl" />
        <div className="absolute right-[-8%] top-20 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/16 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="max-w-3xl">
          {/* <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200"
          >
            <Sparkles size={14} /> Premium Portfolio
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">Ayus Dubey</span>
            <span ref={titleRef} className="gradient-text mt-4 block min-h-[1.2em] text-2xl font-semibold sm:text-3xl lg:text-4xl">
              {currentTitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {site.summary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            {subtitle}
            <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse rounded-full bg-cyan-300" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <MagneticButton href={site.resumePath} label="Download Resume" download="Ayus Dubey org..pdf" />
            <MagneticButton href="#projects" label="View Projects" variant="secondary" />
            <MagneticButton href="#contact" label="Hire Me" variant="ghost" />
            <MagneticButton href="#contact" label="Let's Connect" variant="secondary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : '_blank'}
                  rel={social.label === 'Email' ? undefined : 'noreferrer'}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 backdrop-blur-md">
              Available for internships, freelance work, and product collaborations.
            </div>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-5"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-8 rounded-[2.25rem] bg-gradient-to-br from-sky-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
          <div className="glass-card-strong relative overflow-hidden rounded-[2rem] p-4 shadow-glass">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_48%)]" />
            <div className="relative grid gap-4 md:grid-cols-[0.95fr_1.05fr] md:items-center">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-4">
                <Image
                  src={site.profileImage}
                  alt="Ayus Dubey professional profile placeholder"
                  width={820}
                  height={820}
                  priority
                  className="aspect-square w-full rounded-[1.5rem] object-cover shadow-2xl shadow-sky-500/10"
                />
              </div>

              <div className="space-y-4 p-2 md:p-4">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Software Engineer
                </div>
                <h2 className="font-display text-2xl font-bold text-white">AI-first products with premium execution</h2>
                <p className="text-sm leading-7 text-slate-300">
                  Focused on scalable interfaces, intelligent automation, and elegant software systems that feel polished on every screen.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['MERN Stack', 'Generative AI', 'Machine Learning', 'Product Engineering'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-500">
            Scroll
            <span className="inline-flex h-8 w-5 items-start justify-center rounded-full border border-white/12 p-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300" />
            </span>
            Explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}
