'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/data/tech-stack';

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

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function TechStackSection() {
  return (
    <section id='stack' className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>My toolbox</h2>
          <p className='text-gray-400 text-lg'>Technologies I actually use</p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {techStack.map((category) => (
            <motion.div
              key={category.category}
              className='space-y-4'
              variants={categoryVariants}
            >
              <h3 className='text-lg font-semibold text-blue-400'>
                {category.category}
              </h3>
              <div className='space-y-2'>
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className='px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all'
                  >
                    <p className='text-sm text-gray-300'>{tech}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
