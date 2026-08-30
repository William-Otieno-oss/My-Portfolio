'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';

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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function ExperienceSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>My journey</h2>
        </motion.div>

        <motion.div
          className='space-y-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className='relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors'
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className='absolute -left-4 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-black'></div>

              {/* Content */}
              <div className='mb-2'>
                <p className='text-sm text-blue-400 font-medium'>{item.year}</p>
              </div>
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-400'>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
