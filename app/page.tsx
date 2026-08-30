import { HeroSection } from '@/components/hero-section';
import { WhatIDoSection } from '@/components/what-i-do-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { BuildProcessSection } from '@/components/build-process-section';
import { TechStackSection } from '@/components/tech-stack-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <ProjectsSection />
      <AboutSection />
      <BuildProcessSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
