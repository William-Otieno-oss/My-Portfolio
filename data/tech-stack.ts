export type TechStack = {
  category: string;
  technologies: string[];
};

export const techStack: TechStack[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'API Development', 'Supabase'],
  },
  {
    category: 'Tools',
    technologies: ['Git', 'GitHub', 'VS Code', 'GitHub Copilot'],
  },
  {
    category: 'AI & LLMs',
    technologies: ['AI APIs', 'LLM Integration', 'Prompt Engineering'],
  },
];
