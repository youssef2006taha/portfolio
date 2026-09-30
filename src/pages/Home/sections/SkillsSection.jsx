import SectionHeading from '../../../components/ui/SectionHeading';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs, 
  FaGithub, 
  FaLock, 
  FaNpm, 
  FaCode 
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMongoose, 
  SiGsap, 
  SiPostman, 
  SiVite, 
  SiVercel, 
  SiJsonwebtokens 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const skillIcons = {
  // Frontend
  "HTML5": <FaHtml5 className="text-[#E34F26] w-full h-full" />,
  "CSS3": <FaCss3Alt className="text-[#1572B6] w-full h-full" />,
  "JavaScript (ES6+)": <FaJs className="text-[#F7DF1E] w-full h-full" />,
  "React.js": <FaReact className="text-[#61DAFB] w-full h-full" />,
  "Redux Toolkit": <SiRedux className="text-[#764ABC] w-full h-full" />,
  "Bootstrap 5": <FaBootstrap className="text-[#7952B3] w-full h-full" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4] w-full h-full" />,
  "GSAP": <SiGsap className="text-[#88CE02] w-full h-full" />,

  // Backend & Databases
  "Node.js": <FaNodeJs className="text-[#339933] w-full h-full" />,
  "Express.js": <SiExpress className="text-current w-full h-full" />,
  "MongoDB": <SiMongodb className="text-[#47A248] w-full h-full" />,
  "Mongoose": <SiMongoose className="text-[#880000] w-full h-full" />,
  "RESTful APIs": <TbApi className="text-[#009688] w-full h-full" />,
  "Authentication (JWT)": <SiJsonwebtokens className="text-[#000000] dark:text-white w-full h-full" />,

  // Tools & Environment
  "VS Code": <FaCode className="text-[#007ACC] w-full h-full" />,
  "Git & GitHub": <FaGithub className="text-current w-full h-full" />,
  "Postman": <SiPostman className="text-[#FF6C37] w-full h-full" />,
  "Vite": <SiVite className="text-[#646CFF] w-full h-full" />,
  "Vercel": <SiVercel className="text-current w-full h-full" />,
  "npm": <FaNpm className="text-[#CC3534] w-full h-full" />,
  "Bcryptjs": <FaLock className="text-[#4DABF7] w-full h-full" />,
};

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection({ skills }) {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {
      const { isDesktop } = context.conditions;
      const items = gsap.utils.toArray('.skill-item');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'top 0%',
          scrub: 1,
        }
      });

      if (isDesktop) {
        scrollTl
        .from(".mid", { 
          y: 40,
          x:40, 
          opacity:0.2,
          clearProps: "transform,opacity,scale"
        })
        .from(".first", {
          y: "-105%",
          opacity:0,
          clearProps: "transform,opacity,scale"
        })
        .from(".last", {
          x: "-105%",
          opacity:0,
          clearProps: "transform,opacity,scale"
        }, "<")
      }

      items.forEach((item, index) => {
        if (isDesktop) {
          gsap.to(item, {
            x: (index % 2 === 0 ? 1 : -1) * 8,
            y: (index % 3 === 0 ? -1 : 1) * 10,
            rotation: (index % 2 === 0 ? 4 : -4),
            duration: 2.2 + (index % 3) * 0.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.05,
          });
        } else {
          gsap.to(item, {
            y: index % 2 === 0 ? -8 : 8,
            rotation: (index % 2 === 0 ? 4 : -4),
            duration: 2 + (index % 2) * 0.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.05,
          });
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="skills" className="scroll-mt-10 bg-bg-secondary/40 backdrop-blur-md py-15">
      <div className="container mx-auto px-4">
        <SectionHeading title={skills?.title} subtitle={skills?.subtitle} />

        <div dir="ltr" className="grid gap-10 lg:grid-cols-2 lg:rotate-z-45 lg:scale-70 mt-10 lg:-mb-65">
          {skills?.categories.map((el, index) => (
            <div
              key={index}
              className={`
                bg-primary/2 hover:bg-primary/20 backdrop-blur-md
                border border-text-light/40 hover:border-text-light/70 rounded-4xl
                lg:aspect-square p-6 shadow-lg hover:shadow-primary/20
                transition-[background-color,border-color,box-shadow,scale] duration-500 duration-500 hover:scale-105
                flex justify-center items-center relative
                ${index === 2 ? "first z-1" : index === 0 ? "mid z-3" : "last z-2"}
              `}
            >
              <div className="flex flex-col items-center gap-6 lg:-rotate-z-45 w-full">
                <h3
                  className={`
                    text-[25px] xl:text-4xl font-semibold tracking-widest text-primary text-center
                  `}>
                  {el.name}
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-6 max-w-sm">
                  {el.items.map((skill, i) => (
                    <div
                      key={i}
                      className="skill-item flex flex-col justify-center items-center gap-2 p-2 rounded-xl transition-transform duration-300 hover:scale-115 cursor-default will-change-transform transform-gpu"
                    >
                      <span className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center">
                        {skillIcons[skill] || <span className="text-sm font-bold text-primary">{skill[0]}</span>}
                      </span>
                      <span className="text-xs font-medium text-text-muted text-center whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
