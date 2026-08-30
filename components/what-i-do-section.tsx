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
              className='p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group'
              variants={cardVariants}
            >
              <div className='mb-4 text-blue-400 group-hover:text-blue-300 transition-colors'>
                {getIcon(item.icon)}
              </div>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-400 text-sm'>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
