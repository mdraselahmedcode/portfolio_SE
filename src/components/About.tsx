import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { profile } from '../data/profile';
import { experience } from '../data/experience';

export function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering that respects the deadline and the user."
          description="I work with founders and product teams who need someone that can own a surface end to end — architecture, interface, release and the boring maintenance that keeps it alive." />
        

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6">
            
            <p className="text-base leading-relaxed text-[#B4B4B4]">
              I started in native Android, moved into React Native as teams began sharing
              codebases, and now spend most of my time where mobile, web and model-backed
              features meet. The through-line has always been the same: ship something small,
              measure it, then earn the right to build more.
            </p>
            <p className="text-base leading-relaxed text-[#B4B4B4]">
              Most of my work is with distributed teams, so I write things down, keep builds
              reviewable, and default to handing over documentation the day a project ends
              rather than the week after.
            </p>

            <ul className="space-y-3 pt-2">
              {profile.highlights.map((highlight) =>
              <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#A5CC25]" />
                  <span className="text-sm leading-relaxed text-white/85">{highlight}</span>
                </li>
              )}
            </ul>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2C80EC] via-white/12 to-transparent"
              aria-hidden="true" />
            
            <ol className="space-y-8">
              {experience.map((item, index) =>
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative pl-8">
                
                  <span
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#09090B] bg-[#2C80EC]"
                  aria-hidden="true" />
                
                  <p className="text-xs uppercase tracking-[0.18em] text-[#A5CC25]">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-white">{item.role}</h3>
                  <p className="text-sm text-[#B4B4B4]">
                    {item.company} · {item.location}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">{item.summary}</p>
                </motion.li>
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>);

}