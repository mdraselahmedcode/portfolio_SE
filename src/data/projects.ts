export type Project = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  tech: string[];
  challenge: string;
  solution: string;
  metric: {value: string;label: string;};
  github: string;
  demo: string;
};

export const projects: Project[] = [
{
  id: 'fittrack',
  name: 'FitTrack Pro',
  tagline: 'Adaptive training companion for iOS & Android',
  year: '2026',
  category: 'Mobile App',
  image: "/329d6f52-bb8c-491d-b1b6-0ee011931716.jpg",

  description:
  'A React Native training app that generates adaptive workout plans from wearable data and coaches users through each session with offline-first playback.',
  features: [
  'Adaptive plan engine with weekly auto-progression',
  'Offline-first session playback and sync queue',
  'HealthKit and Google Fit two-way sync',
  'Live rest timers with haptic and audio cues',
  'Streaks, badges and social accountability groups'],

  tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'EAS Build'],
  challenge:
  'Users trained in gym basements with no signal, yet expected their session data and streaks to be perfectly intact once they reconnected.',
  solution:
  'Built a conflict-aware local write-ahead log on SQLite with deterministic replay on reconnect, plus a background sync worker that reconciles wearable data server-side.',
  metric: { value: '400k', label: 'monthly active users' },
  github: 'https://github.com',
  demo: 'https://example.com'
},
{
  id: 'commerce',
  name: 'Northline Commerce',
  tagline: 'Headless storefront and operations console',
  year: '2025',
  category: 'Full Stack',
  image: "/6abdf706-5a7d-4917-99de-a02c8bb7ec99.jpg",

  description:
  'A headless commerce platform with a Next.js storefront, an internal operations console and a Node service layer handling catalog, pricing and fulfilment.',
  features: [
  'Server-rendered storefront with edge caching',
  'Role-based operations console with audit trail',
  'Multi-currency pricing and tax rules engine',
  'Warehouse and courier fulfilment integrations',
  'Real-time inventory reservations at checkout'],

  tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Vercel'],
  challenge:
  'Flash sales oversold inventory because reservations were only written after payment confirmation.',
  solution:
  'Introduced short-lived reservation locks in Postgres with advisory locking and a compensating release job, dropping oversell incidents to zero across four sale events.',
  metric: { value: '1.8s', label: 'p75 checkout time' },
  github: 'https://github.com',
  demo: 'https://example.com'
},
{
  id: 'aivision',
  name: 'Lumen Vision',
  tagline: 'AI image analysis pipeline for insurance claims',
  year: '2025',
  category: 'AI Integration',
  image: "/b39c54fd-fe77-4fc1-b8a9-6e2fbf4e1a67.jpg",

  description:
  'A claims triage tool that reads damage photos, extracts structured findings and drafts adjuster-ready summaries with a confidence-gated human review step.',
  features: [
  'Multi-model routing across Anthropic, OpenAI and Gemini',
  'Structured extraction with schema validation',
  'Confidence thresholds that escalate to human review',
  'Prompt versioning with regression eval suite',
  'Per-tenant cost and latency dashboards'],

  tech: ['Next.js', 'TypeScript', 'Anthropic API', 'OpenAI API', 'Gemini API', 'MongoDB'],
  challenge:
  'Model output drifted between provider versions, and a single bad response could put an invalid claim into the adjuster queue.',
  solution:
  'Added a schema-validated output contract, a golden-set eval that runs on every prompt change, and a fallback chain that reroutes low-confidence cases to a second model before any human sees them.',
  metric: { value: '1.2M', label: 'images processed / month' },
  github: 'https://github.com',
  demo: 'https://example.com'
},
{
  id: 'clinic',
  name: 'Clinic OS',
  tagline: 'Scheduling and records platform for clinics',
  year: '2024',
  category: 'Full Stack',
  image: "/a8dc72de-ee88-42fe-99ac-2cc57be3f64b.jpg",

  description:
  'A practice management platform covering appointment scheduling, patient records, billing and a patient-facing mobile booking companion.',
  features: [
  'Conflict-free multi-practitioner scheduling',
  'Patient records with granular access control',
  'Automated reminders over SMS and push',
  'Insurance-aware billing and invoicing',
  'Companion mobile app for self-service booking'],

  tech: ['Laravel', 'MySQL', 'React', 'React Native', 'JWT Authentication', 'Firebase'],
  challenge:
  'Front-desk staff double-booked rooms because availability was computed per practitioner rather than per resource.',
  solution:
  'Modelled rooms, equipment and staff as bookable resources behind one availability solver, then surfaced conflicts inline during booking instead of after submission.',
  metric: { value: '41%', label: 'fewer no-shows' },
  github: 'https://github.com',
  demo: 'https://example.com'
}];