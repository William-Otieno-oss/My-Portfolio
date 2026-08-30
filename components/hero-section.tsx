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
          className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-blue-200 sm:text-xs'
          variants={itemVariants}
        >
          {siteConfig.status}
        </motion.div>

        <motion.h1
          className='mb-6 text-balance text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl'
          variants={itemVariants}
        >
          I design and build
          <br />
          <span className='bg-gradient-to-r from-blue-300 via-blue-500 to-violet-400 bg-clip-text text-transparent'>
            premium digital experiences
          </span>
        </motion.h1>

        <motion.p
          className='mx-auto mb-6 max-w-3xl text-lg font-medium text-slate-200 sm:text-xl'
          variants={itemVariants}
        >
          Product-minded developer, designer-led builder, and systems thinker helping brands turn ideas
          into polished, conversion-ready experiences.
        </motion.p>

        <motion.p
          className='mx-auto mb-10 max-w-2xl text-base text-slate-400 sm:text-lg'
          variants={itemVariants}
        >
          {siteConfig.shortBio}
        </motion.p>

        <motion.div
          className='mb-12 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300'
          variants={itemVariants}
        >
          {['Web design', 'Full-stack builds', 'AI integrations', 'Conversion strategy'].map((item) => (
            <span key={item} className='rounded-full border border-white/10 bg-white/5 px-3 py-2'>
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className='mb-14 flex flex-col justify-center gap-4 sm:flex-row'
          variants={itemVariants}
        >
          <a
            href='#work'
            className='rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,99,235,0.45)]'
          >
            View my work
          </a>
          <a
            href='/discovery#pricing'
            className='rounded-xl border border-blue-400/30 bg-slate-900/60 px-8 py-3 font-medium text-blue-100 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300/60 hover:bg-blue-500/10'
          >
            View pricing
          </a>
          <a
            href='/discovery'
            className='rounded-xl border border-white/15 bg-white/5 px-8 py-3 font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10'
          >
            Start a project
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className='pointer-events-none absolute left-1/2 top-[calc(100%-138px)] z-10 -translate-x-1/2 sm:top-[calc(100%-150px)]'
        variants={itemVariants}
      >
        <div className='pointer-events-auto'>
          <ScrollIndicator />
        </div>
      </motion.div>
    </section>
  );
}
