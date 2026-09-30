import { useRef, useState } from 'react';
import SectionHeading from '../../../../components/ui/SectionHeading';
import Backdrop from '../../../../components/ui/Backbrop';
import ProjectModalContent from './ProjectModalContent';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection({ projects }) {
  const { current, dir } = useSelector((state) => state.lang);
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // filter
  const filterTabs = [
    { 
      id: 'all', 
      label: current === 'ar' ? 'الكل' : 'All Projects' 
    },
    { 
      id: 'web-apps', 
      label: current === 'ar' ? 'تطبيقات الويب' : 'Web Apps' 
    },
    { 
      id: 'landing', 
      label: current === 'ar' ? 'صفحات وقوالب' : 'Landing Pages' 
    },
  ];
  const filteredProjects = projects.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.filter === activeFilter;
  });

  // modal
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // gsap
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, index) => {
        const rotationAngle = (index % 2 === 0 ? -1 : 1) * (index + 1) * 3;
        gsap.from(card, 
          {
            y: 50,
            x: !isDesktop ?
              0 : 
              index % 2 ?
              150 : -150,
            rotation: rotationAngle,
            scale: 0.6,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 50%",
              end: "top 20%",
              scrub: 1.2,
            }
          }
        );
      });
    });

  }, { scope: containerRef, dependencies: [dir, current] });

  return (
    <section ref={containerRef} id="projects" className="scroll-mt-10 py-15 relative">
      <div className="container overflow-hidden">

        <SectionHeading title={projects.title} subtitle={projects.subtitle} />

        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex items-center rounded-full bg-bg-surface border border-white/10 p-1 shadow-2xl overflow-hidden max-w-xl w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`
                    relative z-10 flex-1 py-3  sm:px-6 text-xs md:text-sm font-semibold transition-colors duration-300 cursor-pointer text-center overflow-hidden rounded-full
                    ${isActive ? 'text-text-main' : 'text-text-light hover:text-text-muted'}
                  `}
                >
                  <div
                      className={`
                        absolute inset-0 z-[-1] rounded-full
                        bg-gradient-to-r from-ball-1 to-ball-2
                        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
                        shadow-lg transition-all duration-300 ease-out
                      `}
                    />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((item, index) => (
            <div
              key={item.id || index + 1}
              onClick={() => handleOpenModal(item)}
              className="project-card relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <div
                className="
                  absolute inset-0 rounded-[23px] z-10
                  bg-gradient-to-br from-ball-1/80 to-ball-2/80
                  -translate-y-full group-hover:translate-y-0
                  transition-translate duration-500 ease-out
                "
              />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-80 object-cover transition-scale duration-500 group-hover:scale-105"
              />

              <div
                className="
                  absolute inset-0 rounded-3xl z-20 p-6
                  translate-y-8 group-hover:translate-y-0
                  flex flex-col items-center text-center justify-center gap-3
                  opacity-0 group-hover:opacity-100
                  transition-translate duration-500 ease-out
                "
              >
                <h3 className="lg:text-xl font-bold text-white drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-white/90 max-w-xs">
                  {item.subDescription}
                </p>
                <span className="mt-2 text-xs font-semibold bg-white/20 text-white border border-white/30 px-4 py-1.5 rounded-full">
                  {current === "ar" ? "انقر لعرض التفاصيل" : "Click to view details"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Backdrop onClose={handleCloseModal} header={selectedProject.title}>
          <ProjectModalContent project={selectedProject} />
        </Backdrop>
      )}
    </section>
  );
}