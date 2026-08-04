export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
{
  id: 'lead',
  role: 'Lead Mobile & AI Engineer',
  company: 'Northline Labs',
  period: '2024 — Present',
  location: 'Remote · US client base',
  summary:
  'Own the mobile platform and the AI feature surface across three products, from architecture through App Store release.',
  achievements: [
  'Rebuilt the release pipeline on EAS, taking releases from monthly to weekly.',
  'Shipped the AI claims triage pipeline now handling 1.2M images a month.',
  'Mentored four engineers to independent feature ownership.'],

  stack: ['React Native', 'Expo', 'Next.js', 'Anthropic API', 'PostgreSQL']
},
{
  id: 'senior',
  role: 'Senior Full Stack Engineer',
  company: 'Vector Studio',
  period: '2022 — 2024',
  location: 'Bengaluru, India',
  summary:
  'Delivered client platforms end to end for commerce, health and logistics teams across the EU and APAC.',
  achievements: [
  'Led a zero-downtime migration off a legacy PHP monolith.',
  'Cut p75 page load by 58% with server rendering and edge caching.',
  'Introduced the shared design system used across six client projects.'],

  stack: ['Next.js', 'Node.js', 'Laravel', 'MySQL', 'Tailwind CSS']
},
{
  id: 'mobile',
  role: 'Mobile Engineer',
  company: 'Kite Interactive',
  period: '2021 — 2022',
  location: 'Pune, India',
  summary:
  'Built and maintained native Android features alongside the first React Native modules in the codebase.',
  achievements: [
  'Reduced cold-start time by 63% on a 400k-MAU app.',
  'Introduced instrumented crash reporting, dropping crash-free sessions below 0.4%.',
  'Shipped the first offline-first sync layer used company-wide.'],

  stack: ['Kotlin', 'Java', 'Android', 'React Native', 'Firebase']
},
{
  id: 'junior',
  role: 'Software Engineer',
  company: 'Bluepath Systems',
  period: '2019 — 2021',
  location: 'Pune, India',
  summary:
  'Started on internal tooling and grew into full ownership of customer-facing web applications.',
  achievements: [
  'Built the internal admin suite still used by 200+ staff.',
  'Automated QA regression runs, saving two engineer-days per release.',
  'Moved the team from FTP deploys to Git-based CI.'],

  stack: ['JavaScript', 'jQuery', 'Laravel', 'MySQL', 'Sass']
}];


export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  deliverable: string;
};

export const processSteps: ProcessStep[] = [
{
  id: 'discovery',
  title: 'Discovery',
  description:
  'Interviews, constraint mapping and a hard look at what the product actually needs to prove first.',
  deliverable: 'Problem brief & success metrics'
},
{
  id: 'planning',
  title: 'Planning',
  description:
  'Scope cut into shippable slices, architecture decided, risks named before any code exists.',
  deliverable: 'Roadmap & technical plan'
},
{
  id: 'ui-design',
  title: 'UI Design',
  description:
  'Flows, states and a token-driven component set in Figma so the build has no ambiguity.',
  deliverable: 'Design system & prototypes'
},
{
  id: 'development',
  title: 'Development',
  description:
  'Typed, reviewed, incremental delivery with a working build in your hands every week.',
  deliverable: 'Weekly preview builds'
},
{
  id: 'testing',
  title: 'Testing',
  description:
  'Unit, integration and device-matrix passes, plus accessibility and performance budgets.',
  deliverable: 'Test suite & QA report'
},
{
  id: 'deployment',
  title: 'Deployment',
  description:
  'Store submissions, environment hardening and monitoring wired up before launch day.',
  deliverable: 'Release & observability setup'
},
{
  id: 'maintenance',
  title: 'Maintenance',
  description:
  'Ongoing iteration, dependency hygiene and a clean handover for your in-house team.',
  deliverable: 'Support retainer & docs'
}];


export type Stat = {value: string;suffix: string;label: string;};

export const stats: Stat[] = [
{ value: '24', suffix: '+', label: 'Apps shipped to stores' },
{ value: '6', suffix: ' yrs', label: 'Professional experience' },
{ value: '4.7', suffix: '★', label: 'Average store rating' },
{ value: '18', suffix: '', label: 'Clients across 9 countries' }];