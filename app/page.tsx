import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import TimelineSection from "@/components/sections/timeline-section";
import SkillsSection from "@/components/sections/skills-section";
import FeaturedProject from "@/components/sections/featured-project";
import ProjectsGrid from "@/components/sections/projects-grid";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
      <FeaturedProject />
      <ProjectsGrid />
      <ContactSection />
    </>
  );
}
