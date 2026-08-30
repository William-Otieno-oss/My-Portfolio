'use client';

import { motion } from 'framer-motion';
import { whatIDo } from '@/data/what-i-do';
import * as Icons from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function WhatIDoSection() {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      Globe: <Icons.Globe className='w-6 h-6' />,
      Laptop: <Icons.Laptop className='w-6 h-6' />,
      Zap: <Icons.Zap className='w-6 h-6' />,
      Rocket: <Icons.Rocket className='w-6 h-6' />,
    };
    return iconMap[iconName] || null;
  };

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>What I do</h2>
          <p className='text-gray-400 text-lg'>Services and expertise</p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {whatIDo.map((item, index) => (
            <motion.div
              key={index}
              className='group rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/70'
              variants={cardVariants}
            >
              <div className='mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300 transition-colors group-hover:bg-blue-500/15 group-hover:text-blue-200'>
                {getIcon(item.icon)}
              </div>
              <h3 className='mb-2 text-lg font-semibold text-white'>{item.title}</h3>
              <p className='text-sm leading-relaxed text-slate-300'>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
