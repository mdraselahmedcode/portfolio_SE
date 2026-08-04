import React from 'react';
import { profile } from '../data/profile';

export function Marquee() {
  const items = [...profile.marquee, ...profile.marquee];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-white/[0.06] py-5"
      aria-hidden="true">
      
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {items.map((item, index) =>
        <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-sm uppercase tracking-[0.18em] text-[#B4B4B4]">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#2C80EC]" />
          </span>
        )}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#09090B] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#09090B] to-transparent" />
    </div>);

}