'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className='flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 shadow-lg shadow-blue-500/10 backdrop-blur-md'
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className='text-[9px] font-medium uppercase tracking-[0.22em] text-slate-300'>Scroll</span>
      <div className='flex h-6 w-6 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200'>
        <ArrowDown className='h-3.5 w-3.5' />
      </div>
    </motion.div>
  );
}
