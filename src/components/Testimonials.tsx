import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#A5CC25] opacity-[0.06] blur-[150px]"
        aria-hidden="true" />
      
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What the people who signed the invoice said." />
        

        <ul className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) =>
          <motion.li
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass relative rounded-3xl p-6 shadow-soft transition-colors duration-300 hover:border-white/20 sm:p-7">
            
              <QuoteIcon className="h-6 w-6 text-[#2C80EC]" aria-hidden="true" />
              <blockquote className="mt-5 text-base leading-relaxed text-white/90">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A5CC25]/15 text-sm font-semibold text-[#A5CC25]">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-[#B4B4B4]">{testimonial.role}</span>
                </span>
              </footer>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}