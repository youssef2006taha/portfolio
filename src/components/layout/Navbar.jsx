import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { toggleMobileMenu, closeMobileMenu, toggleTheme } from '../../features/ui/uiSlice';
import { toggleLanguage } from '../../features/lang/langSlice';
import { portfolioData } from '../../data/data';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import logo from "../../assets/logo1.png"

export default function Navbar({ className }) {
  const dispatch = useDispatch();
  const { isMobileMenuOpen, theme } = useSelector((state) => state.ui);
  const language = useSelector((state) => state.lang.current);
  const { navLinks, langBtn } = portfolioData[language].header;

  useEffect(() => {
    const handleResize = () => {
      dispatch(closeMobileMenu());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
    // sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    window.location.reload();
  };

  const scrollPosition = useScrollPosition()

  return (
    <div>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-colors duration-500 py-1
          ${scrollPosition > 50 ? "bg-bg-layout/50 backdrop-blur-md" : ""}
          ${className}
        `}
      >
        <div className="container h-20 flex items-center justify-between">
          
          <a 
            href="#hero" 
          >
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img 
                  src={logo} 
                  alt="Youssef Taha Logo" 
                  className="relative h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
    
              <div className="flex-col hidden sm:flex md:hidden xl:flex">
                <span className="text-xl font-extrabold tracking-wider text-text-main uppercase group-hover:text-primary transition-colors duration-300">
                  Youssef <span className="text-primary/80">Taha</span>
                </span>
                <span className="text-xs text-text-muted font-medium tracking-widest uppercase">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8 mx-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-muted hover:text-primary font-medium text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-xl bg-bg-secondary hover:bg-bg-layout text-text-main border border-text-light/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-primary" /> : <Moon size={18} className="text-primary" />}
            </button>

            <button
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary-light text-primary hover:bg-primary/20 font-semibold text-xs transition-all active:scale-95 cursor-pointer"
            >
              <Globe size={15} />
              <span>{langBtn}</span>
            </button>

            <button
              className={`
                bg-primary text-text-inverse cursor-pointer
                rounded-full p-1.5
                transition-all duration-200
                md:hidden
                ${isMobileMenuOpen ? 'rotate-90' : ''}
              `}
              onClick={() => dispatch(toggleMobileMenu())}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={2.5} />
              ) : (
                <Menu size={24} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden">
        <div
          className={`
            fixed inset-0 top-20 z-40 bg-bg-main/20 backdrop-blur-sm transition-all duration-500
            ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => dispatch(closeMobileMenu())}
        />

        <div
          className={`
            fixed top-20 left-0 w-full z-40 overflow-hidden transition-all duration-300 bg-primary/10 backdrop-blur-xl shadow-xl
            ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}
          `}
        >
          <nav className="container flex flex-col py-4 px-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => dispatch(closeMobileMenu())}
                className="w-full px-4 py-3 text-text-muted hover:bg-bg-secondary hover:text-primary rounded-xl font-medium text-sm transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}