import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { processSteps } from '../data/experience';

export function Process() {
  return (
    <section id="process" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="How I work"
          title="A seven-step process with no surprise invoices."
          description="Each stage has a deliverable you can point at, so you always know where the project stands." />
        

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block"
            aria-hidden="true" />
          
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) =>
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass group relative rounded-3xl p-5 shadow-soft transition-colors duration-300 hover:border-white/20">
              
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#2C80EC]/15 text-sm font-semibold text-[#2C80EC] transition-colors duration-300 group-hover:bg-[#2C80EC] group-hover:text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-medium text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#B4B4B4]">
                  {step.description}
                </p>
                <p className="mt-4 border-t border-white/[0.07] pt-3 text-xs text-[#A5CC25]">
                  {step.deliverable}
                </p>
              </motion.li>
            )}
          </ol>
        </div>
      </div>
    </section>);

}