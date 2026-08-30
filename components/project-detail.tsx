'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

type ProjectDetailProps = {
  slug: string;
};

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className='min-h-screen pt-20'>
      <motion.div
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href='/#work'
          className='inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          Back to projects
        </Link>
      </motion.div>

      <motion.div
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className='relative w-full h-96 rounded-lg overflow-hidden'>
          <Image src={project.imageUrl} alt={project.title} fill className='object-cover' priority />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
        </div>
      </motion.div>

      <motion.div
        className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className='mb-12'>
          <h1 className='text-5xl font-bold mb-4'>{project.title}</h1>
          <div className='flex flex-wrap gap-2 mb-6'>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
          <p className='text-xl text-gray-300 leading-relaxed'>{project.fullDescription}</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <div className='md:col-span-2 space-y-12'>
            <section>
              <h2 className='text-2xl font-semibold mb-4'>Problem</h2>
              <p className='text-gray-300 leading-relaxed'>{project.problem}</p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold mb-4'>Solution</h2>
              <p className='text-gray-300 leading-relaxed'>{project.solution}</p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold mb-4'>Features</h2>
              <ul className='space-y-2'>
                {project.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-3 text-gray-300'>
                    <span className='text-blue-400 mt-1'>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-semibold mb-4'>Challenges</h2>
              <p className='text-gray-300 leading-relaxed'>{project.challenges}</p>
            </section>

            <section>
              <h2 className='text-2xl font-semibold mb-4'>What I Learned</h2>
              <p className='text-gray-300 leading-relaxed'>{project.learnings}</p>
            </section>
          </div>

          <div className='space-y-6'>
            <div className='p-6 rounded-lg border border-white/10 bg-white/5 sticky top-24'>
              <h3 className='text-lg font-semibold mb-4'>Project Details</h3>

              <div className='mb-6'>
                <p className='text-sm text-gray-400 mb-1'>Role</p>
                <p className='text-white'>{project.role}</p>
              </div>

              <div className='mb-6'>
                <p className='text-sm text-gray-400 mb-1'>Category</p>
                <p className='text-white capitalize'>{project.category}</p>
              </div>

              <div className='space-y-3 pt-6 border-t border-white/10'>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors w-full justify-center'
                  >
                    <ExternalLink className='w-4 h-4' />
                    View Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors w-full justify-center border border-white/10'
                  >
                    <Github className='w-4 h-4' />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-12 mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className='group p-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all'
              >
                <p className='text-sm text-gray-400 mb-2'>← Previous Project</p>
                <h3 className='text-lg font-semibold group-hover:text-blue-400 transition-colors'>
                  {prevProject.title}
                </h3>
              </Link>
            ) : (
              <div></div>
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className='group p-6 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all text-right'
              >
                <p className='text-sm text-gray-400 mb-2'>Next Project →</p>
                <h3 className='text-lg font-semibold group-hover:text-blue-400 transition-colors'>
                  {nextProject.title}
                </h3>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
