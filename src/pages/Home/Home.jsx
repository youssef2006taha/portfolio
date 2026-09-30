
import { useSelector } from 'react-redux';
import { portfolioData } from '../../data/data';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/projects/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import MyJourney from './sections/MyJourney';

function Home({ className }) {
  const language = useSelector((state) => state.lang.current);
  const { hero, about, skills, projects, journey, education, contact } = portfolioData[language];

  return (
    <main className={className}>
      <HeroSection hero={hero} />
      <AboutSection about={about} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <MyJourney journey={journey} />
      <EducationSection education={education} />
      <ContactSection contact={contact} />
    </main>
  );
}

export default Home