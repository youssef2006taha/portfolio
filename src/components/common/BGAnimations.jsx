import { useRef, useState } from "react";
import ColorfulBgCircles from "../ui/ColorfulBgCircles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useIsScrolling } from "../../hooks/useIsScrolling";
import { useSelector } from "react-redux";

gsap.registerPlugin(useGSAP);

function BGAnimations({ className = "" }) {
  const { theme } = useSelector((state) => state.ui);
  const isLight = theme === "light";
  const ballSettings = {
    blur: isLight ? 100 : 130,
    opacities: {
      ball1: isLight ? 0.45 : 0.22,
      ball2: isLight ? 0.40 : 0.18,
      ball3: isLight ? 0.35 : 0.16,
    }
  };

  const containerRef = useRef(null);
  const isScrolling = useIsScrolling();
  
  const [isIdle, setIsIdle] = useState(true);
  const timerRef = useRef(null);

  useGSAP(() => {
    if (isScrolling) {
      setIsIdle(false);
      if (timerRef.current) timerRef.current.kill();
    } else {
      timerRef.current = gsap.delayedCall(2, () => {
        setIsIdle(true);
      });
    }
  }, { dependencies: [isScrolling] });

  useGSAP(
    () => {
      if (isScrolling) {
        // when scrolling
        gsap.to(".ball1", { x: "-100vw", y: "50vh", opacity: 0, duration: 1, overwrite: "auto" });
        gsap.to(".ball2", { x: "-50vw", y: "-100vh", opacity: 0, duration: 1, overwrite: "auto" });
        gsap.to(".ball3", { x: "50vw", y: "50vh", opacity: 0, duration: 1, overwrite: "auto" });

      } else if (!isIdle) {
        // reset
        gsap.to(".ball1", { x: "0vw", y: "0vh", scale: 1, opacity: ballSettings.opacities.ball1, duration: 1.5, ease: "power2.out", overwrite: "auto" });
        gsap.to(".ball2", { x: "0vw", y: "0vh", scale: 1, opacity: ballSettings.opacities.ball2, delay: 0.3, duration: 1.5, ease: "power2.out", overwrite: "auto" });
        gsap.to(".ball3", { x: "0vw", y: "0vh", scale: 1, opacity: ballSettings.opacities.ball3, delay: 0.1, duration: 1.5, ease: "power2.out", overwrite: "auto" });

      } else {
        // main state
        gsap.to(".ball1", {
          x: "10vw", y: "5vh", scale: 1.4, duration: 8, repeat: -1, yoyo: true, ease: "power1.inOut", overwrite: "auto"
        });
        gsap.to(".ball2", {
          x: "-60vw", y: "70vh", scale: 1.2, duration: 17, repeat: -1, yoyo: true, ease: "power1.inOut", overwrite: "auto"
        });
        gsap.to(".ball3", {
          x: "-3vw", y: "-4vh", scale: 1.2, duration: 4, repeat: -1, yoyo: true, ease: "power1.inOut", ease: "sine.inOut", overwrite: "auto"
        });
      }
    },
    { dependencies: [isScrolling, isIdle], scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden flex ${className}`}>
      <ColorfulBgCircles
        top="5vh"
        left="-10vw"
        width="clamp(280px, 50vw, 420px)"
        height="clamp(280px, 50vw, 420px)"
        color="var(--bg-ball-1)"
        blur={ballSettings.blur}
        opacity={ballSettings.opacities.ball1}
        className="ball1 absolute"
      />

      <ColorfulBgCircles
        top="5vh"
        right="-5vw"
        width="clamp(260px, 45vw, 380px)"
        height="clamp(260px, 45vw, 380px)"
        color="var(--bg-ball-2)"
        blur={ballSettings.blur}
        opacity={ballSettings.opacities.ball2}
        className="ball2 absolute"
      />

      <ColorfulBgCircles
        bottom="5vh"
        right="0"
        width="clamp(240px, 40vw, 320px)"
        height="clamp(240px, 40vw, 320px)"
        color="var(--bg-ball-3)"
        blur={ballSettings.blur}
        opacity={ballSettings.opacities.ball3}
        className="ball3 absolute"
      />
    </div>
  );
}

export default BGAnimations;
