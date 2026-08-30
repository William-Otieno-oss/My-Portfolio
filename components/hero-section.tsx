'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { ScrollIndicator } from './scroll-indicator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function HeroSection() {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl opacity-40' />
        <div className='absolute bottom-16 right-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl opacity-40' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_42%)]' />
      </div>

      <motion.div
        className='w-full max-w-5xl text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-200'
          variants={itemVariants}
        >
          {siteConfig.status}
        </motion.div>

        <motion.h1
          className='mb-6 text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl'
          variants={itemVariants}
        >
          Hey, I&apos;m {siteConfig.name}.
          <br />
          <span className='bg-gradient-to-r from-blue-300 via-blue-500 to-violet-400 bg-clip-text text-transparent'>
            I build sharp digital experiences.
          </span>
        </motion.h1>

        <motion.p
          className='mb-8 text-xl text-slate-300 sm:text-2xl'
          variants={itemVariants}
        >
          Product-focused developer. Designer-minded builder. Systems thinker.
        </motion.p>

        <motion.p
          className='mx-auto mb-12 max-w-2xl text-lg text-slate-400'
          variants={itemVariants}
        >
          {siteConfig.shortBio}
        </motion.p>

        <motion.div
          className='flex flex-col justify-center gap-4 sm:flex-row'
          variants={itemVariants}
        >
          <a
            href='#work'
            className='rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:translate-y-[-1px] hover:shadow-blue-500/40'
          >
            View my work
          </a>
          <a
            href='/discovery'
            className='rounded-xl border border-white/15 bg-white/5 px-8 py-3 font-medium text-white transition hover:border-blue-400/40 hover:bg-blue-500/10'
          >
            Book a discovery call
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className='pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 z-20'
        variants={itemVariants}
      >
        <div className='pointer-events-auto'>
          <ScrollIndicator />
        </div>
      </motion.div>
    </section>
  );
}
