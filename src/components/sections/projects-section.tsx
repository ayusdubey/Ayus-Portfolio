"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projectFilters, projects } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>('All');

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Premium project cards with AI-first storytelling"
          description="A small set of polished projects that demonstrate intelligent automation, software craftsmanship, and product thinking."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-fuchsia-500 text-white shadow-glow'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="group glass-card overflow-hidden rounded-[2rem]"
            >
              <div className={`h-40 bg-gradient-to-br ${project.accent} p-5`}>
                <div className="flex h-full items-end justify-between">
                  <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-white/75">Project {index + 1}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                  <ArrowUpRight className="text-cyan-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

                <div className="mt-5 space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
