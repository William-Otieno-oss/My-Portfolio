'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div
      className='group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45 shadow-[0_18px_40px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/70'
      variants={cardVariants}
      whileHover='hover'
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role='link'
      tabIndex={0}
      aria-label={`View project details for ${project.title}`}
    >
      <motion.div
        className='relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20'
        variants={imageVariants}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className='object-cover transition duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent'></div>
      </motion.div>

      <div className='p-6'>
        <div className='mb-3'>
          <span className='rounded-full border border-blue-500/30 bg-blue-500/15 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-200'>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>

        <h3 className='mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-300'>
          {project.title}
        </h3>

        <p className='mb-4 line-clamp-2 text-sm leading-relaxed text-slate-300'>
          {project.shortDescription}
        </p>

        <div className='mb-4 flex flex-wrap gap-2'>
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-slate-200'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex gap-3 border-t border-white/10 pt-4'>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-white'
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className='h-4 w-4' />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-white'
              onClick={(e) => e.stopPropagation()}
            >
              <Github className='h-4 w-4' />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
