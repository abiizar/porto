import { HeroSection } from './components/sections/HeroSection';
import { LogoCloudSection } from './components/sections/LogoCloudSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExpandingCardsSection } from './components/sections/ExpandingCardsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WorkTogetherSection } from './components/sections/WorkTogetherSection';

export default function App() {
  return (
    <div className="overflow-x-clip bg-[#0C0C0C] min-h-screen">
      <HeroSection />
      <LogoCloudSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ExpandingCardsSection />
      <ServicesSection />
      <WorkTogetherSection />
    </div>
  );
}
