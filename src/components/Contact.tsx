import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  MapPinIcon,
  CheckIcon,
  Loader2Icon,
  ArrowUpRightIcon } from
'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { MagneticButton } from './ui/MagneticButton';
import { profile } from '../data/profile';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const budgets = ['< $10k', '$10k — $25k', '$25k — $60k', '$60k+'];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    budget: budgets[1],
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = 'Please tell me your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    nextErrors.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 20)
    nextErrors.message = 'A little more detail helps — 20 characters minimum.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 1200);
  };

  const fieldClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus:border-[#2C80EC] focus:outline-none';

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Tell me what you are building."
          description="I reply to every serious enquiry within one business day, usually with two or three questions that will shape the estimate." />
        

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-[2rem] p-6 shadow-soft sm:p-8">
            
            {status === 'sent' ?
            <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="grid h-14 w-14 place-items-center rounded-full bg-[#A5CC25] text-[#09090B]">
                
                  <CheckIcon className="h-6 w-6" />
                </motion.span>
                <h3 className="mt-6 text-xl font-medium text-white">Message received</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#B4B4B4]">
                  Thanks {values.name.split(' ')[0]} — I&apos;ll come back to you at{' '}
                  {values.email} within one business day.
                </p>
                <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setValues({ name: '', email: '', budget: budgets[1], message: '' });
                }}
                className="mt-6 text-sm text-[#2C80EC] underline-offset-4 hover:underline">
                
                  Send another message
                </button>
              </div> :

            <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                    
                      Name
                    </label>
                    <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(event) => update('name', event.target.value)}
                    placeholder="Jordan Ellis"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass} />
                  
                    {errors.name ?
                  <p id="name-error" className="mt-2 text-xs text-[#2C80EC]">
                        {errors.name}
                      </p> :
                  null}
                  </div>
                  <div>
                    <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                    
                      Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => update('email', event.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass} />
                  
                    {errors.email ?
                  <p id="email-error" className="mt-2 text-xs text-[#2C80EC]">
                        {errors.email}
                      </p> :
                  null}
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                    Budget range
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((budget) =>
                  <button
                    key={budget}
                    type="button"
                    onClick={() => update('budget', budget)}
                    aria-pressed={values.budget === budget}
                    className={`rounded-full border px-4 py-2 text-xs transition-colors duration-200 ${
                    values.budget === budget ?
                    'border-[#2C80EC] bg-[#2C80EC]/15 text-white' :
                    'border-white/10 text-[#B4B4B4] hover:border-white/25 hover:text-white'}`
                    }>
                    
                        {budget}
                      </button>
                  )}
                  </div>
                </fieldset>

                <div>
                  <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                  
                    Project details
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder="What are you building, who is it for, and when does it need to be live?"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClass} resize-none`} />
                
                  {errors.message ?
                <p id="message-error" className="mt-2 text-xs text-[#2C80EC]">
                      {errors.message}
                    </p> :
                null}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2C80EC] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4291F5] disabled:cursor-not-allowed disabled:opacity-60">
                  
                    {status === 'sending' ?
                  <>
                        <Loader2Icon className="h-4 w-4 animate-spin" />
                        Sending
                      </> :

                  <>
                        Send message
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </>
                  }
                  </button>
                  <p aria-live="polite" className="text-xs text-[#B4B4B4]">
                    {status === 'error' ?
                  'Please fix the highlighted fields.' :
                  'No newsletters. No sales sequences.'}
                  </p>
                </div>
              </div>
            }
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="grid gap-5 content-start">
            
            <div className="glass rounded-3xl p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2C80EC]/15 text-[#2C80EC]">
                <MailIcon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block text-base text-white underline-offset-4 hover:underline">
                
                {profile.email}
              </a>
            </div>

            <div className="glass rounded-3xl p-6 shadow-soft">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#A5CC25]/15 text-[#A5CC25]">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                Location
              </p>
              <p className="mt-1 text-base text-white">{profile.location}</p>
            </div>

            <div className="glass rounded-3xl p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.16em] text-[#B4B4B4]">
                Availability
              </p>
              <p className="mt-2 flex items-start gap-2.5 text-base leading-relaxed text-white">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#A5CC25]" />
                {profile.availability}
              </p>
              <div className="mt-5">
                <MagneticButton href={profile.resumeUrl} variant="ghost" download>
                  Download résumé
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}