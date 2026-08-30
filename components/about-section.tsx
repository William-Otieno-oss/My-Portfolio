'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

const strengths = [
  'Product strategy',
  'UI/UX design',
  'Full-stack build',
  'AI integrations',
  'Performance optimization',
  'Conversion-focused design',
];

export function AboutSection() {
  return (
    <section id='about' className='bg-gradient-to-b from-black to-black/50 px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          className='mb-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-4 text-4xl font-bold sm:text-5xl'>A little about me</h2>
        </motion.div>

        <motion.div
          className='grid items-center gap-12 md:grid-cols-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='space-y-6'>
            <p className='text-lg leading-relaxed text-gray-300'>
              I’m a product-minded developer who enjoys turning rough ideas into polished digital
              experiences that people actually want to use. My work sits at the intersection of design,
              engineering, and business thinking: I care about how a product feels, how it works, and
              how it helps a business grow.
            </p>

            <p className='text-lg leading-relaxed text-gray-300'>
              Over time, I’ve learned that the best digital work isn’t just about writing code or making
              things look good. It’s about understanding the problem, simplifying the complexity, and
              building something clear, fast, and credible. That mindset shapes the way I design
              interfaces, develop websites, and build custom tools for real-world use.
            </p>

            <p className='text-lg leading-relaxed text-gray-300'>
              I enjoy working on ambitious projects where strategy, user experience, and technology all
              matter. Whether it’s a premium landing page, a business website, or an AI-powered product,
              I focus on clear systems, thoughtful experiences, and measurable outcomes.
            </p>

            <div className='flex flex-wrap gap-3 pt-2'>
              {strengths.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

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
