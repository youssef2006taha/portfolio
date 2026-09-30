import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiOutlineRocketLaunch, HiOutlineCpuChip, HiOutlineSparkles } from 'react-icons/hi2';
import SectionHeading from '../../../components/ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  HiOutlineRocketLaunch: <HiOutlineRocketLaunch className="h-8 w-8 text-primary" />,
  HiOutlineCpuChip: <HiOutlineCpuChip className="h-8 w-8 text-primary" />,
  HiOutlineSparkles: <HiOutlineSparkles className="h-8 w-8 text-primary" />,
};

export default function AboutSection({ about }) {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const statsContainerRef = useRef(null);

  const stats = [
    { 
      id: 'stat-1', 
      value: 1, 
      isDecimal: true, 
      suffix: '+', 
      label: about?.statsLabels?.yearsExperience || 'Years Experience' 
    },
    { 
      id: 'stat-2', 
      value: 10, 
      isDecimal: false, 
      suffix: '+', 
      label: about?.statsLabels?.projectsCompleted || 'Projects Completed' 
    },
    { 
      id: 'stat-3', 
      value: 15, 
      isDecimal: false, 
      suffix: '+', 
      label: about?.statsLabels?.technologiesUsed || 'Technologies Used' 
    }
  ];

  useGSAP(() => {
    gsap.fromTo(
      '.about-big-card',
      { y: 50, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-big-card',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    stats.forEach((stat) => {
      const el = document.getElementById(stat.id);
      if (el) {
        gsap.to(
          { val: 0 },
          {
            val: stat.value,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsContainerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            onUpdate: function () {
              const currentVal = this.targets()[0].val;
              el.innerText = stat.isDecimal
                ? currentVal.toFixed(1)
                : Math.floor(currentVal);
            },
          }
        );
      }
    });

    const mm = gsap.matchMedia();
    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      if (!cardsContainerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: isDesktop ? 'top 100%' : 'top 57%',
          end: isDesktop ? 'top 65%' : 'top 40%',
          scrub: 1,
        },
      });

      if (isDesktop) {
        tl.fromTo('.about-detail-card1', { xPercent: 108, y: 30, rotate: -15, scale: 0.9, opacity: 0.2 }, { xPercent: 0, y: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power1.inOut' }, 0)
          .fromTo('.about-detail-card2', { scale: 0.95 }, { scale: 1, ease: 'power1.inOut' }, 0)
          .fromTo('.about-detail-card3', { xPercent: -108, y: 30, rotate: 15, scale: 0.9, opacity: 0.2 }, { xPercent: 0, y: 0, rotate: 0, scale: 1, opacity: 1, ease: 'power1.inOut' }, 0);
      } else {
        tl.fromTo('.about-detail-card2', { y: '-107%' }, { y: 0, scale: 1, ease: 'power1.inOut' }, 0)
          .fromTo('.about-detail-card3', { y: '-214%' }, { y: 0, scale: 1, ease: 'power1.inOut' }, 0);
      }
    });
  }, { scope: containerRef, dependencies: [about] });

  return (
    <section ref={containerRef} id="about" className="scroll-mt-10 py-15 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="about-heading text-center">
          <SectionHeading title={about?.title} subtitle={about?.subtitle} />
        </div>

        <div className="about-big-card max-w-4xl mx-auto mt-8 rounded-3xl border border-primary/15 bg-bg-surface/75 p-8 shadow-xl shadow-primary/5 backdrop-blur-md text-center">
          <p className="text-base leading-8 text-text-muted md:text-lg md:leading-9">
            {about?.bio}
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="mt-12 grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto relative"
        >
          {about?.highlights?.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`
                relative group
                about-detail-card${index + 1} z-${3 - index}
                rounded-2xl border border-text-light/10 p-6
                bg-bg-secondary/80 backdrop-blur-sm
                transition-colors duration-300
                hover:border-primary/40 h-45 lg:h-auto
              `}
            >
              <div className="mb-3">
                {iconMap[item?.icon] || <HiOutlineSparkles className="h-8 w-8 text-primary" />}
              </div>
              <h3 className="text-lg font-bold text-text-main transition-colors duration-300 group-hover:text-primary">
                {item?.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item?.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={statsContainerRef}
          className="mt-8 w-full max-w-5xl mx-auto rounded-2xl border border-primary/15 bg-bg-surface/40 p-4 shadow-xl backdrop-blur-md sm:mt-12 sm:p-6"
        >
          <div className="grid grid-cols-3 gap-3 divide-x divide-primary/20 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center px-1 sm:px-4">
                <span className="text-xl font-extrabold text-primary sm:text-3xl md:text-4xl">
                  <span id={stat.id}>0</span>
                  <span>{stat.suffix}</span>
                </span>
                <span className="mt-1 text-[11px] font-medium leading-tight text-text-muted sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}