export type Project = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  role: string;
  challenges: string;
  learnings: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'website' | 'application' | 'ai' | 'experiment';
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'project-one',
    title: 'The Happy Pet Blueprint',
    shortDescription:
      'A premium pet care guide and printable planner bundle designed to help new pet owners build better routines.',
    fullDescription:
      'This product brings together an easy-to-follow pet care system with printable planners, trackers, and a 30-day challenge to help owners stay consistent without overwhelm.',
    problem:
      'New and busy pet owners needed a simple, organized way to manage feeding, routines, vet care, training, and daily habits without feeling overwhelmed.',
    solution:
      'Created a premium digital resource with clear step-by-step guidance, printable planning tools, and a practical system that turns good intentions into daily routines.',
    features: [
      'Complete pet care guide',
      'Printable planner bundle',
      'Daily habit trackers',
      'Emergency and health checklists',
      '30-day challenge framework',
    ],
    stack: ['Product Design', 'Digital Product Strategy', 'Content Packaging', 'Marketing Funnel'],
    role: 'Product Designer & Creator',
    challenges:
      'Packaging a useful, premium resource in a way that feels calm, clear, and highly valuable for pet owners.',
    learnings:
      'This reinforced the importance of turning information into a clear system with real-world utility and a premium presentation.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&h=600&fit=crop',
    demoUrl: 'https://otienowill5.gumroad.com/l/emmurb',
    githubUrl: '',
    category: 'website',
  },
  {
    id: 2,
    slug: 'project-two',
    title: 'Task Management Web App',
    shortDescription: 'A full-featured web application for managing projects and tasks.',
    fullDescription:
      'A complete web application with user authentication, real-time updates, and a polished interface for managing tasks and projects.',
    problem:
      'Users needed a simple yet powerful way to manage tasks and collaborate with team members.',
    solution:
      'Built a full-stack application with Node.js backend, React frontend, and real-time data synchronization using Supabase.',
    features: [
      'User authentication and authorization',
      'Real-time task updates',
      'Team collaboration',
      'Custom categories and tags',
      'Dark mode support',
      'Mobile responsive',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    role: 'Full-stack Developer',
    challenges:
      'Implementing real-time updates and ensuring data consistency across multiple users.',
    learnings:
      'Gained experience with real-time databases and learned how to structure scalable backend architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    demoUrl: '#',
    githubUrl: '#',
    category: 'application',
  },
  {
    id: 3,
    slug: 'project-three',
    title: 'AI Content Generator',
    shortDescription: 'An AI-powered tool for generating and editing content quickly.',
    fullDescription:
      'A web application that leverages OpenAI API to generate high-quality content for various use cases.',
    problem:
      'Content creators needed a faster way to generate initial drafts and ideas for their projects.',
    solution:
      'Integrated OpenAI API with a intuitive interface, allowing users to generate, edit, and refine content in real-time.',
    features: [
      'AI-powered text generation',
      'Multiple content templates',
      'Edit and refine suggestions',
      'Export to multiple formats',
      'Usage analytics',
    ],
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    role: 'Full-stack Developer',
    challenges: 'Managing API costs and handling rate limiting appropriately.',
    learnings:
      'Learned how to integrate external APIs efficiently and create great UX around AI capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1677442d019cecf8978f57e840e3a6e?w=1200&h=600&fit=crop',
    demoUrl: '#',
    githubUrl: '#',
    category: 'ai',
  },
  {
    id: 4,
    slug: 'project-four',
    title: 'Interactive Data Dashboard',
    shortDescription: 'A real-time dashboard for visualizing complex data sets.',
    fullDescription:
      'A powerful dashboard that transforms raw data into interactive visualizations and insights.',
    problem: 'Businesses needed a way to visualize and understand large amounts of data in real-time.',
    solution:
      'Created an interactive dashboard with real-time data fetching, multiple visualization types, and drill-down capabilities.',
    features: [
      'Real-time data updates',
      'Multiple chart types',
      'Customizable views',
      'Export data functionality',
      'User preferences saved',
    ],
    stack: ['React', 'TypeScript', 'D3.js', 'Recharts', 'Node.js'],
    role: 'Frontend Developer & Data Visualization Specialist',
    challenges:
      'Handling large datasets and ensuring smooth rendering of complex visualizations.',
    learnings:
      'Deep dive into data visualization libraries and performance optimization for data-heavy applications.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    demoUrl: '#',
    githubUrl: '#',
    category: 'application',
  },
];
