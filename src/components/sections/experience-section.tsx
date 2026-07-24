"use client";

import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internship experience focused on product delivery"
          description="Hands-on work delivering responsive apps, APIs, and quality improvements in a collaborative environment."
        />

        <div className="space-y-5">
          {experience.map((item) => (
            <motion.article key={item.company} whileHover={{ y: -5 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:text-sm">{item.duration}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-lg font-semibold text-slate-200">{item.company}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <BriefcaseBusiness size={16} className="text-cyan-300" /> Full Stack Delivery
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {item.responsibilities.map((responsibility) => (
                  <div key={responsibility} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-slate-200">
                    {responsibility}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
