export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  accent: 'primary' | 'secondary';
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
{
  id: 'mobile',
  title: 'Mobile Development',
  blurb: 'Cross-platform and native apps built for store review on day one.',
  accent: 'primary',
  skills: ['React Native', 'Expo', 'Kotlin', 'Java', 'Android', 'iOS']
},
{
  id: 'frontend',
  title: 'Frontend',
  blurb: 'Interface work that stays fast, accessible and maintainable.',
  accent: 'secondary',
  skills: [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap',
  'Sass',
  'HTML',
  'CSS',
  'JavaScript',
  'jQuery']

},
{
  id: 'backend',
  title: 'Backend',
  blurb: 'APIs and data models designed to survive real traffic.',
  accent: 'primary',
  skills: [
  'Node.js',
  'Express.js',
  'Laravel',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'REST APIs',
  'JWT Authentication']

},
{
  id: 'ai',
  title: 'AI & Integration',
  blurb: 'Model-backed features with guardrails, evals and cost control.',
  accent: 'secondary',
  skills: [
  'Anthropic API',
  'OpenAI API',
  'Gemini API',
  'AI Image Analysis',
  'Third-party SDK Integration']

},
{
  id: 'tools',
  title: 'Tools',
  blurb: 'The delivery pipeline that gets work in front of users.',
  accent: 'primary',
  skills: ['Git', 'GitHub', 'Vercel', 'EAS Build', 'Firebase', 'Figma']
}];