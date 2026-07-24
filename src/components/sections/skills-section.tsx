"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, ServerCog, SquareCode, Workflow } from 'lucide-react';
import { skillCategories } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

const categoryIcons = [SquareCode, Workflow, ServerCog, Database, Code2, Code2, Workflow] as const;

function SkillBar({ progress }: { progress: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-500"
      />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced stack across engineering, deployment, and AI"
          description="These cards highlight the tools and platforms I use to ship clean interfaces, resilient backends, and practical AI experiences."
        />

        <div className="grid gap-5 xl:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <motion.article key={category.title} whileHover={{ y: -5 }} className="glass-card rounded-[2rem] p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-fuchsia-500/30 text-cyan-200">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                    {category.progress}%
                  </span>
                </div>

                <SkillBar progress={category.progress} />

                <div className="mt-5 flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
