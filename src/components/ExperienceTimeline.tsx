import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { experience } from '../data/experience';

export function ExperienceTimeline() {
  const [activeId, setActiveId] = useState(experience[0].id);
  const active = experience.find((item) => item.id === activeId) ?? experience[0];

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Six years, four teams, one habit: ship it."
          description="Select a role to see what changed while I was there." />
        

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            className="relative"
            role="tablist"
            aria-label="Work history"
            aria-orientation="vertical">
            
            <div
              className="absolute left-[19px] top-4 bottom-4 w-px bg-white/[0.08]"
              aria-hidden="true" />
            
            <ul className="space-y-2">
              {experience.map((item, index) => {
                const selected = item.id === activeId;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}>
                    
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      aria-controls="experience-panel"
                      onClick={() => setActiveId(item.id)}
                      className={`relative flex w-full items-start gap-4 rounded-2xl p-3 pl-12 text-left transition-colors duration-300 ${
                      selected ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`
                      }>
                      
                      <span
                        className={`absolute left-3 top-4 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-[#09090B] transition-colors duration-300 ${
                        selected ? 'bg-[#A5CC25]' : 'bg-white/25'}`
                        }
                        aria-hidden="true" />
                      
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                          {item.period}
                        </span>
                        <span
                          className={`mt-1 block text-sm font-medium transition-colors ${
                          selected ? 'text-white' : 'text-white/70'}`
                          }>
                          
                          {item.role}
                        </span>
                        <span className="block text-xs text-[#B4B4B4]">{item.company}</span>
                      </span>
                    </button>
                  </motion.li>);

              })}
            </ul>
          </div>

          <div
            className="glass rounded-[2rem] p-6 shadow-soft sm:p-8"
            id="experience-panel"
            role="tabpanel">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2C80EC]/15 text-[#2C80EC]">
                  <BriefcaseIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-medium tracking-tight text-white">
                  {active.role}
                </h3>
                <p className="mt-1 text-sm text-[#A5CC25]">
                  {active.company} · {active.period} · {active.location}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-[#B4B4B4]">{active.summary}</p>

                <h4 className="mt-7 text-xs uppercase tracking-[0.2em] text-[#B4B4B4]">
                  What changed
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {active.achievements.map((achievement) =>
                  <li
                    key={achievement}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                    
                      <span
                      className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#A5CC25]"
                      aria-hidden="true" />
                    
                      {achievement}
                    </li>
                  )}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {active.stack.map((tech) =>
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80">
                    
                      {tech}
                    </li>
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}