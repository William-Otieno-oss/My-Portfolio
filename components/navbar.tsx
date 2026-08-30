'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (pathname !== '/') {
        return;
      }

      const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
      if (sections.length === 0) {
        return;
      }

      let current: HTMLElement | undefined;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section;
          break;
        }
      }

      setActiveSection(current?.id ?? 'work');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: '/#work', label: 'Work', sectionId: 'work' },
    { href: '/#about', label: 'About', sectionId: 'about' },
    { href: '/#stack', label: 'Stack', sectionId: 'stack' },
    { href: '/#contact', label: 'Contact', sectionId: 'contact' },
    { href: '/discovery', label: 'Discovery', sectionId: 'discovery' },
  ];

  const getIsActive = (link: (typeof navLinks)[number]) => {
    if (link.href === '/discovery') {
      return pathname === '/discovery';
    }

    return pathname === '/' && activeSection === link.sectionId;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='text-xl font-bold tracking-tight'>
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-2'>
            {navLinks.map((link) => {
              const isActive = getIsActive(link);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full border px-3 py-2 text-sm transition-all ${
                    isActive
                      ? 'border-blue-400/60 bg-blue-500/15 text-white shadow-[0_0_0_1px_rgba(96,165,250,0.2)]'
                      : 'border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className='ml-2 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span className='text-xs text-green-400'>{siteConfig.status}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors'
          >
            {isOpen ? (
              <X className='w-5 h-5' />
            ) : (
              <Menu className='w-5 h-5' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className='md:hidden overflow-hidden'
        >
          <div className='flex flex-col gap-3 py-4 border-t border-white/10'>
            {navLinks.map((link) => {
              const isActive = getIsActive(link);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                    isActive
                      ? 'border-blue-400/60 bg-blue-500/15 text-white'
                      : 'border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className='flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 w-fit'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <span className='text-xs text-green-400'>{siteConfig.status}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
