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
      className='group rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer'
      variants={cardVariants}
      whileHover='hover'
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role='link'
      tabIndex={0}
      aria-label={`View project details for ${project.title}`}
    >
      {/* Image */}
      <motion.div
        className='relative w-full h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20'
        variants={imageVariants}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
      </motion.div>

      {/* Content */}
      <div className='p-6'>
        {/* Category */}
        <div className='mb-3'>
          <span className='text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30'>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
          {project.shortDescription}
        </p>

        {/* Stack */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className='text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/10'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className='flex gap-3 pt-4 border-t border-white/10'>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors'
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className='w-4 h-4' />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors'
              onClick={(e) => e.stopPropagation()}
            >
              <Github className='w-4 h-4' />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
