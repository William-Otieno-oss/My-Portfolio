'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t border-white/10 bg-black/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Brand */}
          <div>
            <Link href='/' className='text-lg font-bold'>
              {siteConfig.name}
            </Link>
            <p className='text-gray-400 text-sm mt-2'>
              Building beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-4'>Quick Links</h3>
            <div className='space-y-2'>
              {[
                { label: 'Work', href: '#work' },
                { label: 'About', href: '#about' },
                { label: 'Stack', href: '#stack' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='block text-gray-400 hover:text-white text-sm transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='font-semibold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href={siteConfig.githubUrl}
                className='text-gray-400 hover:text-white transition-colors'
                target='_blank'
                rel='noreferrer'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                className='text-gray-400 hover:text-white transition-colors'
                target='_blank'
                rel='noreferrer'
              >
                <Linkedin className='w-5 h-5' />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Mail className='w-5 h-5' />
              </a>
            </div>
            <p className='text-sm text-gray-400 mt-4'>{siteConfig.phone}</p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/10 pt-8'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-400 text-sm'>
                © 2026 {siteConfig.name}. Built with code, caffeine & curiosity.
              </p>
            </div>
            <motion.button
              onClick={scrollToTop}
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm text-gray-300 hover:text-white transition-colors'
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>Back to top</span>
              <ArrowUp className='w-4 h-4' />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
