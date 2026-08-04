import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GithubIcon,
  ExternalLinkIcon,
  AlertTriangleIcon,
  LightbulbIcon,
  ChevronDownIcon } from
'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { MagneticButton } from './ui/MagneticButton';
import { projects } from '../data/projects';

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="work" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Four projects, and what they actually cost to get right."
          description="Every case study includes the constraint that nearly broke it — that is usually the part worth reading." />
        

        <div className="mt-16 space-y-6">
          {projects.map((project, index) => {
            const open = openId === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="glass overflow-hidden rounded-[2rem] shadow-soft">
                
                <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
                  <div className="relative overflow-hidden bg-black/40 p-3">
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                      <motion.img
                        src={project.image}
                        alt={`${project.name} — ${project.tagline}`}
                        width={1280}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full w-full object-cover" />
                      
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent"
                        aria-hidden="true" />
                      
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="glass rounded-full px-3 py-1 text-xs text-white">
                          {project.category}
                        </span>
                        <span className="glass rounded-full px-3 py-1 text-xs text-[#B4B4B4]">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-medium tracking-tight text-white">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm text-[#A5CC25]">{project.tagline}</p>
                      </div>
                      <div className="hidden shrink-0 text-right sm:block">
                        <p className="text-2xl font-semibold text-white">
                          {project.metric.value}
                        </p>
                        <p className="text-xs text-[#B4B4B4]">{project.metric.label}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#B4B4B4]">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) =>
                      <li
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/80">
                        
                          {tech}
                        </li>
                      )}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : project.id)}
                      aria-expanded={open}
                      aria-controls={`${project.id}-details`}
                      className="mt-6 flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-white transition-colors hover:border-white/25 hover:bg-white/[0.04]">
                      
                      {open ? 'Hide case study' : 'Read the case study'}
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''}`
                        } />
                      
                    </button>

                    <AnimatePresence initial={false}>
                      {open ?
                      <motion.div
                        id={`${project.id}-details`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden">
                        
                          <div className="space-y-5 pt-6">
                            <div>
                              <h4 className="text-xs uppercase tracking-[0.2em] text-[#B4B4B4]">
                                Key features
                              </h4>
                              <ul className="mt-3 grid gap-2">
                                {project.features.map((feature) =>
                              <li
                                key={feature}
                                className="flex items-start gap-2.5 text-sm text-white/80">
                                
                                    <span
                                  className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2C80EC]"
                                  aria-hidden="true" />
                                
                                    {feature}
                                  </li>
                              )}
                              </ul>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                                  <AlertTriangleIcon className="h-3.5 w-3.5 text-[#2C80EC]" />
                                  Challenge
                                </p>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                                  {project.challenge}
                                </p>
                              </div>
                              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                                  <LightbulbIcon className="h-3.5 w-3.5 text-[#A5CC25]" />
                                  Solution
                                </p>
                                <p className="mt-2.5 text-sm leading-relaxed text-white/80">
                                  {project.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div> :
                      null}
                    </AnimatePresence>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <MagneticButton
                        href={project.github}
                        variant="ghost"
                        ariaLabel={`View ${project.name} source on GitHub`}>
                        
                        <GithubIcon className="h-4 w-4" />
                        GitHub
                      </MagneticButton>
                      <MagneticButton
                        href={project.demo}
                        variant="primary"
                        ariaLabel={`Open the ${project.name} live demo`}>
                        
                        <ExternalLinkIcon className="h-4 w-4" />
                        Live demo
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.article>);

          })}
        </div>
      </div>
    </section>);

}