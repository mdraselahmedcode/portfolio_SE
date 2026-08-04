import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { useTypedText } from '../hooks/useTypedText';
import { profile } from '../data/profile';

const floaters = [
{ size: 120, top: '18%', left: '6%', delay: 0, ring: 'border-[#2C80EC]/40' },
{ size: 64, top: '68%', left: '12%', delay: 0.6, ring: 'border-[#A5CC25]/40' },
{ size: 90, top: '26%', left: '86%', delay: 1.1, ring: 'border-white/15' },
{ size: 48, top: '78%', left: '78%', delay: 0.3, ring: 'border-[#2C80EC]/30' }];


export function Hero() {
  const typed = useTypedText(profile.typedPhrases);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="noise relative isolate flex min-h-screen w-full items-center overflow-hidden pt-28 pb-16">
      
      <div className="grid-lines absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#2C80EC] opacity-[0.18] blur-[140px]"
        animate={{ scale: [1, 1.15, 1], x: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
      
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-52 right-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-[#A5CC25] opacity-[0.12] blur-[150px]"
        animate={{ scale: [1.1, 1, 1.1], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      

      {floaters.map((floater, index) =>
      <motion.span
        key={index}
        aria-hidden="true"
        className={`pointer-events-none absolute hidden rounded-[28%] border ${floater.ring} lg:block`}
        style={{ width: floater.size, height: floater.size, top: floater.top, left: floater.left }}
        animate={{ y: [0, -26, 0], rotate: [0, 22, 0] }}
        transition={{
          duration: 12 + index * 2,
          delay: floater.delay,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />

      )}

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs text-[#B4B4B4]">
            
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A5CC25] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A5CC25]" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
            
            Software engineer building{' '}
            <span className="text-[#2C80EC]">{typed}</span>
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-[#A5CC25]" />
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#B4B4B4] sm:text-lg">
            
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3">
            
            <MagneticButton href="#work" variant="primary">
              View selected work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <MailIcon className="h-4 w-4" />
              Start a project
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} variant="ghost" download>
              <DownloadIcon className="h-4 w-4" />
              Download résumé
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            
            <span className="flex items-center gap-2 text-sm text-[#B4B4B4]">
              <MapPinIcon className="h-4 w-4 text-[#2C80EC]" />
              {profile.location}
            </span>
            <ul className="flex flex-wrap items-center gap-4">
              {profile.socials.map((social) =>
              <li key={social.label}>
                  <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative text-sm text-[#B4B4B4] transition-colors hover:text-white">
                  
                    {social.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#A5CC25] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative">
          
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow">
            <img
              src={profile.heroImage}
              alt="3D mockups of a mobile app and desktop dashboard built by Aarav Mehta"
              width={1024}
              height={1024}
              loading="eager"
              className="h-full w-full rounded-[1.6rem] object-cover" />
            
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -bottom-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block">
            
            <p className="text-2xl font-semibold text-white">99.98%</p>
            <p className="text-xs text-[#B4B4B4]">crash-free sessions</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -right-4 top-8 hidden rounded-2xl px-4 py-3 sm:block">
            
            <p className="text-2xl font-semibold text-[#A5CC25]">24+</p>
            <p className="text-xs text-[#B4B4B4]">apps shipped</p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#B4B4B4] transition-colors hover:text-white md:flex">
        
        Scroll
        <ArrowDownIcon className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>);

}