"use client";

import { motion } from 'framer-motion';
import { BrainCircuit, GraduationCap, Layers3, Sparkles, Target, Zap } from 'lucide-react';
import { aboutPoints } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

const stats = [
  { value: '3+', label: 'AI Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '20+', label: 'Certifications' },
  { value: '100%', label: 'Passion' },
] as const;

const highlights = [
  { icon: GraduationCap, title: 'B.Tech Computer Science Graduate' },
  { icon: BrainCircuit, title: 'Passionate about AI' },
  { icon: Layers3, title: 'Strong Full Stack Developer' },
  { icon: Sparkles, title: 'Interested in LLMs' },
  { icon: Target, title: 'Problem Solver' },
  { icon: Zap, title: 'Fast Learner' },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Modern software engineering with strong AI ambition"
          description="I build scalable products with a product-led mindset, combining clean full stack execution with practical machine learning and generative AI thinking."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/30 p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.18),transparent_42%)]" />
              <img
                src="/profile-placeholder.svg"
                alt="Ayus Dubey professional placeholder portrait"
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-white">Core strengths</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-fuchsia-500/30 text-cyan-200">
                          <Icon size={18} />
                        </span>
                        <p className="pt-1 text-sm leading-7 text-slate-200">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-white">What I bring</h3>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {aboutPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
