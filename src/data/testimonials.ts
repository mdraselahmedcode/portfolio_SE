export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
{
  id: 't1',
  quote:
  'Aarav took a vague idea and returned a scoped plan in four days. Ten weeks later we were live on both stores with fewer bugs than our last three releases combined.',
  name: 'Marta Lindqvist',
  role: 'VP Product, Northline',
  initials: 'ML'
},
{
  id: 't2',
  quote:
  'The AI pipeline he built is the only part of our stack I never worry about. Guardrails, evals, cost dashboards — all of it was there before we thought to ask.',
  name: 'Devon Carter',
  role: 'CTO, Lumen Insurance',
  initials: 'DC'
},
{
  id: 't3',
  quote:
  'He works like a senior partner, not a contractor. Pushed back on scope that would have hurt us and was right every time.',
  name: 'Priya Raghavan',
  role: 'Founder, Clinic OS',
  initials: 'PR'
},
{
  id: 't4',
  quote:
  'Our app went from 4.1 to 4.8 stars in one quarter. Performance work, offline handling, the details users feel but never name.',
  name: 'Tomás Herrera',
  role: 'Head of Engineering, Kite',
  initials: 'TH'
}];