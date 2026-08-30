'use client';

import { motion } from 'framer-motion';
import { buildProcess } from '@/data/build-process';

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

export function BuildProcessSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>How I build</h2>
          <p className='text-gray-400 text-lg'>My process from idea to ship</p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {buildProcess.map((step, index) => (
            <motion.div
              key={step.number}
              className='relative'
              variants={itemVariants}
            >
              {/* Card */}
              <div className='p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors h-full flex flex-col'>
                <div className='text-3xl font-bold text-blue-400 mb-2'>
                  {step.number}
                </div>
                <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
                <p className='text-gray-400 text-sm flex-grow'>{step.description}</p>
              </div>

              {/* Arrow */}
              {index < buildProcess.length - 1 && (
                <div className='hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10'>
                  <div className='text-2xl text-gray-600'>→</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
