import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Backdrop({ children, header, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (children) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.2)" }
      );
    }
  }, [children]);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        if (onClose) onClose();
      },
    });
  };

  if (!children) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-primary/5 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
      />

      <div
        ref={modalRef}
        className="
          relative z-10
          rounded-2xl overflow-hidden
          bg-bg-surface border border-text-light/10 shadow-2xl p-2
        "
      >
        {header ? (
          <div className="py-3 px-4 md:px-6 flex justify-between items-center border-b border-primary/40">
            <h4 className="text-sm md:text-base lg:text-lg font-semibold text-primary">{header}</h4>
            <button
              onClick={handleClose}
              className="p-1 rounded-full bg-primary/30 text-text-main hover:bg-primary/70 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-1 rounded-full bg-black/40 text-white hover:bg-black/90 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        )}

        {children}
      </div>
    </div>,
    document.body
  );
}

export default Backdrop;