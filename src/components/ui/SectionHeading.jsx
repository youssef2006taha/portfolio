import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function SectionHeading({ title, subtitle, className = "" }) {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(subtitleRef.current, {
      y: 15,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    })
    .to(headingRef.current, {
      text: title,
      duration: 1.2,
      ease: 'none',
    });

  }, { scope: containerRef, dependencies: [title, subtitle] });

  return (
    <div ref={containerRef} className={className}>
      <p 
        ref={subtitleRef} 
        className="font-signature text-2xl font-bold text-primary"
      >
        {subtitle}
      </p>

      <h2 
        ref={headingRef} 
        className="mt-3 min-h-[1.2em] text-3xl font-bold text-text-main md:text-5xl"
      />
    </div>
  );
}