"use client";

import { motion } from 'framer-motion';
import { LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { contactDetails, site } from '@/constants/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || payload.message.length < 10) {
      setStatus('error');
      setMessage('Please complete all fields and write a slightly longer message.');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? 'Unable to send message.');
      }

      setStatus('success');
      setMessage('Message sent successfully.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to send message right now.');
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out for roles, collaborations, and product ideas"
          description="The contact form validates on the client and sends messages directly to my inbox through a Next.js API route."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-5">
            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">{item.label}</p>
                    <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-slate-200">
                <MapPin className="text-cyan-300" size={18} />
                <span>{site.location}</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-200">
                <Phone className="text-cyan-300" size={18} />
                <span>{site.phone}</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-200">
                <Mail className="text-cyan-300" size={18} />
                <span>{site.email}</span>
              </div>
            </motion.div>
          </div>

          <motion.form onSubmit={handleSubmit} whileHover={{ y: -4 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-200">
                Name
                <input
                  name="name"
                  required
                  minLength={2}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm text-slate-200">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm text-slate-200">
              Subject
              <input
                name="subject"
                required
                minLength={3}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="Project inquiry"
              />
            </label>

            <label className="mt-4 grid gap-2 text-sm text-slate-200">
              Message
              <textarea
                name="message"
                required
                minLength={10}
                rows={6}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="Tell me about the role, project, or collaboration."
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-300 hover:-translate-y-1 disabled:opacity-60"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? <LoaderCircle className="animate-spin" size={18} /> : <Mail size={18} />}
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <p className={`text-sm ${status === 'error' ? 'text-rose-300' : status === 'success' ? 'text-emerald-300' : 'text-slate-400'}`}>
                {message || 'Messages are delivered to my inbox through the server route.'}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
