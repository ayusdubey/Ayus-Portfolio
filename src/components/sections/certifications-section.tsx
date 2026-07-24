"use client";

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { certifications } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Validated learning that reinforces engineering depth"
          description="Selected certifications spanning data science, databases, object-oriented programming, and applied AI."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <motion.article key={certification.name} whileHover={{ y: -5 }} className="glass-card rounded-[2rem] p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 via-blue-500/20 to-fuchsia-500/30 text-cyan-200">
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">{certification.issuer}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{certification.name}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
