'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Send } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const name = String(payload.name ?? '').trim();
    const email = String(payload.email ?? '').trim();
    const projectType = String(payload.projectType ?? '').trim();
    const message = String(payload.message ?? '').trim();

    if (!name || !email || !projectType || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='bg-gradient-to-b from-black to-slate-950 px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='mb-12 text-center'>
            <p className='mb-3 text-xs uppercase tracking-[0.28em] text-blue-300'>Let&apos;s build</p>
            <h2 className='mb-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl'>Have an idea worth shipping?</h2>
            <p className='mx-auto max-w-2xl text-lg text-slate-300'>
              Tell me what you need and I&apos;ll help shape the product, timeline, and next steps.
            </p>
          </div>

          <div className='grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]'>
            <aside className='sticky top-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm'>
              <p className='mb-4 text-sm uppercase tracking-[0.25em] text-blue-300'>Contact</p>

              <div className='space-y-6'>
                <div>
                  <p className='mb-2 text-sm text-slate-400'>Email</p>
                  <a href={`mailto:${siteConfig.email}`} className='text-lg text-white transition hover:text-blue-400'>
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className='mb-2 text-sm text-slate-400'>Phone</p>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className='text-lg text-white transition hover:text-blue-400'>
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <p className='mb-4 text-sm text-slate-400'>Connect</p>
                  <div className='flex gap-5'>
                    <a href={siteConfig.githubUrl} target='_blank' rel='noreferrer' className='text-slate-300 transition hover:text-white'>
                      <Github className='h-5 w-5' />
                    </a>
                    <a href={siteConfig.linkedinUrl} target='_blank' rel='noreferrer' className='text-slate-300 transition hover:text-white'>
                      <Linkedin className='h-5 w-5' />
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <div className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8'>
              <div className='mb-8'>
                <p className='mb-2 text-sm uppercase tracking-[0.2em] text-blue-300'>Quick inquiry</p>
                <h3 className='text-3xl font-semibold text-white'>Send a project brief</h3>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='mb-2 block text-sm text-slate-300'>Name</label>
                    <input id='name' name='name' type='text' required placeholder='Your name' className='w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none' />
                  </div>

                  <div>
                    <label htmlFor='email' className='mb-2 block text-sm text-slate-300'>Email</label>
                    <input id='email' name='email' type='email' required placeholder='you@example.com' className='w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none' />
                  </div>
                </div>

                <div>
                  <label htmlFor='projectType' className='mb-2 block text-sm text-slate-300'>Project type</label>
                  <select id='projectType' name='projectType' required style={{ colorScheme: 'dark' }} className='w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none [background-image:none]'>
                    <option value='' className='bg-slate-900 text-white'>Select project type</option>
                    <option value='Website' className='bg-slate-900 text-white'>Website</option>
                    <option value='Web App' className='bg-slate-900 text-white'>Web App</option>
                    <option value='AI Product' className='bg-slate-900 text-white'>AI Product</option>
                    <option value='Maintenance' className='bg-slate-900 text-white'>Maintenance</option>
                    <option value='Other' className='bg-slate-900 text-white'>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='message' className='mb-2 block text-sm text-slate-300'>Project details</label>
                  <textarea id='message' name='message' required rows={6} placeholder='Tell me about your goals, audience, timeline, and what you need built.' className='w-full resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none' />
                </div>

                <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                  <button type='submit' disabled={isSubmitting} className='inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-medium text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70'>
                    {isSubmitting ? 'Sending...' : 'Send inquiry'}
                    {isSubmitting ? <Send className='h-4 w-4' /> : <ArrowRight className='h-4 w-4' />}
                  </button>

                  <a href='/discovery' className='inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200'>
                    <Mail className='h-4 w-4' />
                    Fill the full discovery form
                  </a>
                </div>

                {submitStatus === 'success' && (
                  <p className='text-sm text-emerald-400'>Your message was sent successfully. I&apos;ll be in touch soon.</p>
                )}

                {submitStatus === 'error' && (
                  <p className='text-sm text-red-400'>Something went wrong. Please email me directly or try again in a moment.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
