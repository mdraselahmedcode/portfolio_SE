import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { stats } from '../data/experience';

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatCard({
  stat,
  index,
  active




}: {stat: (typeof stats)[number];index: number;active: boolean;}) {
  const target = Number.parseFloat(stat.value);
  const decimals = stat.value.includes('.') ? 1 : 0;
  const animated = useCountUp(target, active);

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass relative overflow-hidden rounded-3xl p-6 shadow-soft">
      
      <div
        className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#2C80EC] opacity-20 blur-[50px]"
        aria-hidden="true" />
      
      <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {animated.toFixed(decimals)}
        <span className="text-[#A5CC25]">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm text-[#B4B4B4]">{stat.label}</p>
    </motion.li>);

}

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6" ref={ref}>
        <SectionHeading
          eyebrow="Achievements"
          title="Numbers from real releases."
          align="center" />
        
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) =>
          <StatCard key={stat.label} stat={stat} index={index} active={inView} />
          )}
        </ul>
      </div>
    </section>);

}