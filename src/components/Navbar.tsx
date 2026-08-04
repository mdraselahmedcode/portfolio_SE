import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Work', href: '#work' },
{ label: 'Process', href: '#process' },
{ label: 'Experience', href: '#experience' },
{ label: 'Contact', href: '#contact' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-[#2C80EC]"
        aria-hidden="true" />
      
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? 'glass shadow-soft' : 'border border-transparent'}`
          }>
          
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
            
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2C80EC] text-xs font-bold">
              AM
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) =>
            <li key={link.href}>
                <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-[#B4B4B4] transition-colors duration-200 hover:bg-white/[0.06] hover:text-white">
                
                  {link.label}
                </a>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#09090B] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex">
              
              Resume
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white lg:hidden">
              
              {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open ?
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden">
            
              <ul className="grid gap-1">
                {links.map((link) =>
              <li key={link.href}>
                    <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-[#B4B4B4] transition-colors hover:bg-white/[0.06] hover:text-white">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </motion.div> :
          null}
        </AnimatePresence>
      </header>
    </>);

}