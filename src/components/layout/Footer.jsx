import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { portfolioData } from '../../data/data';
import logo from "../../assets/logo1.png"


export default function Footer() {
  const language = useSelector((state) => state.lang.current);
  const { footer } = portfolioData[language];

  border
  return (
    <footer className="py-5 flex justify-center items-center relative bg-gradient-to-r from-primary/20 via-ball-1/20 to-ball-2/20 backdrop-blur-md mt-16 md:mt-20">

      <div className="absolute bottom-full left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-14 md:h-18"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary, #3b82f6)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--color-ball-1, #8b5cf6)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--color-ball-2, #ec4899)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C150,110 350,10 500,70 C650,120 900,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#footer-wave-gradient)"
          ></path>
        </svg>
      </div>

      <div className="container flex flex-col items-center justify-between gap-6 text-sm text-text-muted md:flex-row">

        <div className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <img 
              src={logo} 
              alt="Youssef Taha Logo" 
              className="relative h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider text-text-main uppercase group-hover:text-primary transition-colors duration-300">
              Youssef <span className="text-primary/80">Taha</span>
            </span>
            <span className="text-xs text-text-muted font-medium tracking-widest uppercase">
              Full Stack Developer
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/youssef2006taha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-text-light/10 bg-bg-secondary text-text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary hover:scale-110"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-taha-819982350/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-text-light/10 bg-bg-secondary text-text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:youssef.taha.6278@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-text-light/10 bg-bg-secondary text-text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary hover:scale-110"
          >
            <FaEnvelope size={17} />
          </a>
        </div>

        <a
          href="#hero"
          className="group inline-flex cursor-pointer items-center gap-2 font-semibold text-primary transition-colors hover:text-ball-1"
        >
          <span>{footer.backToTop || 'Back to top'}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
            <ArrowUp size={16} />
          </span>
        </a>

      </div>
    </footer>
  );
}