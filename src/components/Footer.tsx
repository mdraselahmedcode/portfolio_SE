import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
import { profile } from '../data/profile';

const columns = [
{
  title: 'Navigate',
  links: [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Selected work', href: '#work' },
  { label: 'Process', href: '#process' }]

},
{
  title: 'More',
  links: [
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }]

}];


export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.07] py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
              
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2C80EC] text-xs font-bold">
                AM
              </span>
              {profile.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B4B4B4]">
              Mobile, full stack and AI engineering for teams that need it done properly the
              first time.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-sm text-[#A5CC25] underline-offset-4 hover:underline">
              
              {profile.email}
            </a>
          </div>

          {columns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-[#B4B4B4]">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) =>
              <li key={link.href}>
                    <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}

          <nav aria-label="Social">
            <p className="text-xs uppercase tracking-[0.18em] text-[#B4B4B4]">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {profile.socials.map((social) =>
              <li key={social.label}>
                  <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white">
                  
                    {social.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[#B4B4B4]">
            © {new Date().getFullYear()} {profile.name}. Designed and built from scratch.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white transition-colors hover:border-white/30">
            
            Back to top
            <ArrowUpIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>);

}