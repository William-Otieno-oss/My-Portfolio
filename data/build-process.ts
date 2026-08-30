export type BuildStep = {
  number: string;
  title: string;
  description: string;
};

export const buildProcess: BuildStep[] = [
  {
    number: '01',
    title: 'Idea',
    description: 'Start with a problem worth solving.',
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'Turn the idea into something tangible quickly.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Shape the experience with clear UX decisions and modern product thinking.',
  },
  {
    number: '04',
    title: 'Iterate',
    description: 'Test, break, improve and repeat.',
  },
  {
    number: '05',
    title: 'Ship',
    description: 'Polish the experience and put it in people\'s hands.',
  },
];
