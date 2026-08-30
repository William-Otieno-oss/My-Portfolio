'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export function AboutSection() {
  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-black/50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>A little about me</h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm a creative developer who enjoys turning ideas into real products. I like
              experimenting with new technologies, building useful tools, designing
              interfaces and figuring out how to make complicated things feel simple.
            </p>
            <p className='text-lg text-gray-300 leading-relaxed'>
              I'm particularly interested in the intersection of software, AI and design.
              Whether it's building a landing page that converts or prototyping an AI-powered
              feature, I'm always looking for the next interesting challenge.
            </p>
          </div>

          {/* Profile Image */}
          <motion.div
            className='relative mx-auto w-full max-w-md'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3 shadow-2xl shadow-blue-500/10'>
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10' />
              <div className='relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20'>
                <Image
                  src='/profile pic.png'
                  alt={siteConfig.name}
                  width={900}
                  height={1100}
                  priority
                  className='h-[520px] w-full object-cover object-center'
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
