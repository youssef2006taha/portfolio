import { Award, GraduationCap, BookOpen, Globe, Calendar, Play } from 'lucide-react';
import SectionHeading from "../../../components/ui/SectionHeading";
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Backbrop from '../../../components/ui/Backbrop';

gsap.registerPlugin(ScrollTrigger);

const getIcon = (type) => {
  switch (type) {
    case 'training':
      return <Award className="w-4 h-4 text-text-inverse" />;
    case 'diploma':
      return <GraduationCap className="w-4 h-4 text-text-inverse" />;
    case 'bootcamp':
      return <BookOpen className="w-4 h-4 text-text-inverse" />;
    case 'language':
      return <Globe className="w-4 h-4 text-text-inverse" />;
    default:
      return <Award className="w-4 h-4 text-text-inverse" />;
  }
};

function MyJourney({ journey }) {
  const { dir } = useSelector((state) => state.lang);
  const [selectedImg, setSelectedImg] = useState(null)
  const containerRef = useRef(null);

  useGSAP(() => {

    // Line
    const lineTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".line",
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

    lineTl
      .to('.line', {
        scaleY: 1,
        duration: 1.8,
        ease: 'power1.inOut',
      })
      .to('.line-play', {
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1.2, 0.4)',
      }, '-=0.2')
      .from(".future", {
        scaleY:0,
        autoAlpha:0,
        duration: 1.3,
        ease: 'elastic.out(1, 0.7)',
      }, "<")

    // Cards
    const cards = gsap.utils.toArray('.journey-card');

    cards.forEach((card) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from(card.querySelectorAll('.point'), {
        scale: 0,
        duration: 0.8,
        ease: "elastic.out(1.2, 0.4)",
        transformOrigin: "center center",
      })

      .from(card.querySelectorAll('.data'), {
        x: dir === 'rtl' ? 100 : -100,
        autoAlpha: 0,
        scale:0.7,
        rotate: dir === 'rtl' ? -8 : 8,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        clearProps: "transform,opacity"
      }, "-=0.4")

      .from(card.querySelectorAll('.image'), {
        x: dir === 'rtl' ? -100 : 100,
        autoAlpha: 0,
        scale: 0.4,
        rotate: dir === 'rtl' ? 8 : -8,
        duration: 1.2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.4)",
        clearProps: "transform,opacity,scale"
      }, "<").from(card.querySelectorAll('.sep'), {
        autoAlpha: 0,
        scale: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "elastic.out(1, 0.4)",
        clearProps: "transform,opacity,scale",
      });

    });

  }, { scope: containerRef, dependencies: [dir] });

  return (
    <section ref={containerRef} id='journey' className='scroll-mt-10 pt-15 pb-5 bg-bg-secondary/40 backdrop-blur-md'>
      <div className='container overflow-hidden !pb-20'>
        <SectionHeading title={journey.title} subtitle={journey.subtitle} />

        <div className="relative mt-16 space-y-12 pl-8 lg:pl-0">

          <div className="line origin-top scale-y-0 absolute top-9 left-0 h-full lg:left-1/2 -translate-x-1/2 w-1 bg-primary z-0 rounded-t-full">
            <div className='future relative -mt-14 w-full h-15 bg-linear-0 from-primary to-primary/20 rounded-t-full origin-bottom'>
              <p className='absolute -top-4 left-1/2 -translate-x-2 md:-translate-x-1/2 uppercase tracking-wider text-[8px] lg:text-[10px] text-primary'>future</p>
            </div>
            <div className="line-play scale-0 absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-3 border-bg-primary shadow-lg shadow-primary/50" />
          </div>

          {journey.items?.map((item, index) => (
            <div key={item.id || index} className="journey-card pb-12 relative grid lg:grid-cols-2 gap-8 lg:gap-16 w-full">
              
              {/* point */}
              <div className="point absolute -left-8 lg:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                {getIcon(item.type)}
              </div>

              {/* sep */}
              <div className='absolute bottom-0 left-0 right-0 h-0.5 flex justify-center gap-8 lg:gap-16 overflow-hidden'>
                <div
                  className={`
                    sep h-full w-[90%] lg:w-[45%]
                    bg-linear-to-r from-transparent via-primary/20 to-transparent
                    origin-left ${dir === 'rtl' ? "lg:origin-left" : "lg:origin-right"}
                  `}
                />
                <div
                  className={`
                    sep h-full w-[45%]
                    bg-linear-to-r from-transparent via-primary/20 to-transparent
                    origin-left lg:${dir === 'rtl' ? "origin-right" : "origin-left"}
                    hidden lg:block
                  `}
                />
              </div>

              {/* certificates */}
              <div className={`order-2 flex justify-between flex-wrap w-full ${dir === "rtl" ? "flex-row-reverse" : "lg:flex-row-reverse"}`}>
                {item.certificates?.map((certificate) => (
                  <div
                    key={certificate.id || certificate.title}
                    className="image cursor-pointer group/cert relative w-[48%] rounded-2xl overflow-hidden border border-text-light/10 bg-bg-secondary/40 p-2 transition-[background-color,border-color,box-shadow,scale] duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                    onClick={() => setSelectedImg({
                      src : certificate.image,
                      alt : certificate.title,
                      studentId : certificate.studentId
                    })}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain transition-[background-color,border-color,box-shadow,scale] duration-500 group-hover/cert:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Journey Card */}
              <div className='order-1 lg:order-3'>
                <div className="data group rounded-2xl border border-text-light/10 bg-bg-secondary/60 p-6 backdrop-blur-md transition-[background-color,border-color,box-shadow,scale] duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:scale-102">
                  
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>

                    {item.badge && (
                      <span className="text-xs font-semibold text-text-muted bg-text-light/5 border border-text-light/10 px-2.5 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-medium text-text-muted mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-sm text-text-muted/90 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      {selectedImg && (
        <Backbrop
          onClose={() => setSelectedImg(null)}
        >
          <div className='relative'>
            {selectedImg?.studentId && (
              <span className="absolute top-3 left-3 z-10 bg-primary/60 backdrop-blur-md text-white text-xs md:text-sm font-mono px-3 py-1.5 rounded-full border border-text-light/50 shadow-lg">
                #{selectedImg.studentId}
              </span>
            )}
            <img 
              src={selectedImg.src} 
              alt={selectedImg.alt} 
              className="max-h-[80vh] w-full object-contain rounded-xl"
            />
          </div>
        </Backbrop>
      )}
    </section>
  );
}

export default MyJourney;