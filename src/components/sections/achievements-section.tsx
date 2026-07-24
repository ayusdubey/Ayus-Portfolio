"use client";

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Impact driven by curiosity, consistency, and execution"
          description="A concise view of the habits and outcomes that shape how I approach software development and AI work."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement}
              whileHover={{ y: -5 }}
              className="glass-card rounded-[2rem] p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-pink-500/30 text-amber-200">
                  <Trophy size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{achievement}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
