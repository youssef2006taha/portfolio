import { useRef } from 'react';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import youssefImage from '../../../assets/youssef-taha.png';

export default function HeroSection({ hero }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      });
      tl.fromTo(
        '.hero-text-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, clearProps: 'transform' }
      )
      .fromTo(
        '.hero-image-card',
        { 
          // x: isDesktop? -30:0,
          // y: isDesktop? 0:30,
          y:30,
          scale: 0.95,
          opacity: 0
        },
        { x: 0, y:0, scale: 1, opacity: 1, duration: 1, clearProps: 'transform' },
        '-=0.5'
      ).from(['.react-badge', '.nodeJs-badge'], {
        y: 20,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.2,
      });
      gsap.to('.react-badge', {
        y: -4,
        rotateZ:5,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8,
      });
      gsap.to('.nodeJs-badge', {
        y: -6,
        rotateZ:-5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.1,
      });
  
      gsap.to('.live', {
        scale: 2.2,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: 'power1.out',
      });

      gsap.to('.float-github', {
        y: -6,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.float-linkedin', {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.3,
      });

    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="container scroll-mt-20 flex min-h-[calc(100vh-80px)] flex-col-reverse items-center justify-between gap-8 py-8 md:flex-row"
    >
      <div className="flex flex-1 flex-col items-center md:items-start text-left">
        <div className="hero-text-item mb-5 flex flex-wrap items-center gap-4">
          
          <p className="flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 backdrop-blur-3xl">
            <span className="relative flex items-center justify-center">
              <span className={`h-2 w-2 rounded-full ${hero.isAvailable ? 'bg-green-400' : 'bg-amber-500'}`} />
              {hero.isAvailable && (
                <span className="live absolute top-0 left-0 h-full w-full rounded-full bg-green-400" />
              )}
            </span>
            <span className="bg-gradient-to-r from-ball-1 to-primary bg-clip-text text-xs font-semibold text-transparent md:text-sm">
              {hero.isAvailable ? hero.availableText : hero.notAvailableText}
            </span>
          </p>

          <a
            href="https://github.com/youssef2006taha"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="float-github ml-4 text-primary hover:text-primary/80"
          >
            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/youssef-taha-819982350/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="float-linkedin text-primary hover:text-primary/80"
          >
            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

        </div>
        
        <p className="hero-text-item mb-2 md:mb-0 text-sm font-semibold text-primary md:text-base">
          {hero.greeting}
        </p>
        <h1 className="hero-text-item font-signature inline-block px-2 text-5xl bg-gradient-to-r from-primary via-ball-1 to-ball-2 bg-clip-text text-transparent md:text-6xl lg:text-7xl py-2 md:leading-20">
          {hero.name}
        </h1>
        <h2 className="hero-text-item text-start mt-2 text-lg font-semibold text-primary md:text-2xl lg:text-3xl">
          {hero.title}
        </h2>

        <p className="hero-text-item text-start mt-4 max-w-lg text-sm leading-relaxed text-text-muted md:text-base">
          {hero.description}
        </p>

        <div className="hero-text-item mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-active to-primary-hover/70 px-5 py-2.5 text-sm font-semibold text-primary-inverse transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            {hero.contactBtnText}
            <ArrowUpRight size={16} />
          </a>

          <a
            href="../../../../public/Youssef-Taha-CV.pdf"
            download="Youssef-Taha-CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold backdrop-blur-2xl bg-primary/10 border border-primary transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 text-text-main/85 hover:text-text-inverse"
          >
            {hero.downloadCV}
            <ArrowDownToLine size={16} />
          </a>

        </div>
      </div>

      <div className="hero-image-card relative flex w-full flex-1 justify-center md:justify-end">
        <div className="relative w-full max-w-[300px] md:max-w-[360px]">
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.01}
            transitionSpeed={1200}
            className="image relative h-fit w-full overflow-hidden rounded-[2.5rem] border border-primary/0 shadow-2xl transition-all duration-300 hover:border-primary/70 hover:shadow-primary/20"
          >
            <div className="relative rounded-[2.5rem] border border-primary/20 bg-bg-surface/30 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-primary/10 via-transparent to-bg-main/60">
                <img
                  src={youssefImage}
                  alt={hero.name}
                  className="h-[380px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-bg-main to-transparent opacity-60" />
              </div>
            </div>
          </Tilt>

          <div className="react-badge absolute -left-10 top-8 z-20 flex items-center gap-3 rounded-2xl border border-text-light/10 bg-bg-surface/90 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 -rotate-z-5 sm:-left-20 md:-left-8 lg:-left-12 xl:-left-20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <FaReact size={22} className="text-[#61DAFB]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-text-main leading-tight">React</h4>
              <span className="text-[11px] font-medium text-text-muted">Front-End</span>
            </div>
          </div>

          <div className="nodeJs-badge absolute -right-10 bottom-8 z-20 flex items-center gap-3 rounded-2xl border border-text-light/10 bg-bg-surface/90 p-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 rotate-z-5 sm:-right-20 md:-right-8 lg:-right-12 xl:-right-20">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <FaNodeJs size={22} className="text-[#339933]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-text-main leading-tight">Node.js</h4>
              <span className="text-[11px] font-medium text-text-muted">Back-End</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}