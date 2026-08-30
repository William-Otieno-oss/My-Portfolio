'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className='flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-lg shadow-blue-500/10 backdrop-blur-sm'
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className='text-[10px] font-medium uppercase tracking-[0.24em] text-slate-300'>Scroll</span>
      <div className='flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200'>
        <ArrowDown className='h-4 w-4' />
      </div>
    </motion.div>
  );
}
