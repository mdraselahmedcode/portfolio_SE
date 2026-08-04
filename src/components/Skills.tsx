import React from 'react';
import { motion } from 'framer-motion';
import {
  SmartphoneIcon,
  LayoutDashboardIcon,
  ServerIcon,
  SparklesIcon,
  WrenchIcon } from
'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { skillGroups } from '../data/skills';

const icons: Record<string, React.ElementType> = {
  mobile: SmartphoneIcon,
  frontend: LayoutDashboardIcon,
  backend: ServerIcon,
  ai: SparklesIcon,
  tools: WrenchIcon
};

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#2C80EC] opacity-[0.07] blur-[160px]"
        aria-hidden="true" />
      
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full delivery stack, not a list of logos."
          description="Everything here has shipped to production on a real project with real users and a real deadline." />
        

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.id];
            const accent = group.accent === 'primary' ? '#2C80EC' : '#A5CC25';
            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`glass group relative overflow-hidden rounded-3xl p-6 shadow-soft transition-colors duration-300 hover:border-white/20 ${
                group.id === 'tools' ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''}`
                }>
                
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: accent }}
                  aria-hidden="true" />
                
                <span
                  className="grid h-11 w-11 place-items-center rounded-2xl"
                  style={{ background: `${accent}1f`, color: accent }}>
                  
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-medium text-white">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B4B4B4]">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) =>
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 transition-colors duration-200 hover:border-white/25 hover:text-white">
                    
                      {skill}
                    </li>
                  )}
                </ul>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}