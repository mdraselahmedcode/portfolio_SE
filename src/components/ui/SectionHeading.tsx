import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      
      <div
        className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        
        <span className="h-1.5 w-1.5 rounded-full bg-[#A5CC25]" />
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#B4B4B4]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ?
      <p className="mt-5 text-base leading-relaxed text-[#B4B4B4] sm:text-lg">
          {description}
        </p> :
      null}
    </motion.div>);

}