import { useEffect, useState } from "react";

export const useIsScrolling = (delay = 150) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    let timeOutId;

    const handleScroll = () => {
      setIsScroll(true);
      clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
        setIsScroll(false);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeOutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay]);

  return isScroll;
};