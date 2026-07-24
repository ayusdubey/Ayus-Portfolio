import { AchievementsSection } from '@/components/sections/achievements-section';
import { AboutSection } from '@/components/sections/about-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { PageTransition } from '@/components/layout/page-transition';

export default function HomePage() {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </PageTransition>
  );
}
