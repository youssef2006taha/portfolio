import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/layout/Footer";
import BGAnimations from "./components/common/BGAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Toast from "./components/ui/Toast";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { theme } = useSelector((state) => state.ui);
  const { dir } = useSelector((state) => state.lang);

  // const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dir = dir;
  }, [theme, dir]);

  // Scroll Restoration Management
  // useEffect(() => {
  //   if ("scrollRestoration" in window.history) {
  //     window.history.scrollRestoration = "manual";
  //   }

  //   const savedScrollPosition = sessionStorage.getItem("scrollPosition");

  //   if (savedScrollPosition !== null) {
  //     const targetY = parseInt(savedScrollPosition, 10);

  //     // 1. إظهار الصفحة أولاً وهي عند أصل الصفحة (top: 0)
  //     setIsReady(true);

  //     // 2. عمل Smooth Scroll ناعم جداً للمكان القديم بعد ما الصفحة تجهز
  //     const timer = setTimeout(() => {
  //       window.scrollTo({
  //         top: targetY,
  //         behavior: "smooth", // الانتقال بشكل ناعم وسلس
  //       });

  //       // 3. تحديث نقاط GSAP بعد انتهاء السكرول
  //       setTimeout(() => {
  //         if (typeof ScrollTrigger !== "undefined") {
  //           ScrollTrigger.refresh();
  //         }
  //       }, 500);
  //     }, 100);

  //     return () => clearTimeout(timer);
  //   } else {
  //     setIsReady(true);
  //   }

  //   // 4. حفظ مكان السكرول باستمرار (حتى لو كان 0)
  //   let timeoutId;
  //   const handleScroll = () => {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => {
  //       // تم إلغاء شرط (scrollY > 0) ليتم حفظ الـ 0 إذا عدت لأعلى الصفحة
  //       sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  //     }, 100);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // GSAP Animations
  useGSAP(() => {
    // if (!isReady) return;

    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      delay: 0.2,
    });
    gsap.from(".home", {
      y: 20,
      opacity: 0,
    });
  });
  // }, [isReady]);

  return (
    <div
      className={`relative min-h-screen bg-bg-main text-text-main transition-opacity duration-300`}
    >
      <BGAnimations className="pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-10">
        <Navbar className="navbar" />
        <Home className="home pt-20" />
        <Footer />
        <Toast />
      </div>
    </div>
  );
}

export default App;



// تظبيط السكرول لكل سكشن
// حوار لما بعمل ريفريش مش بيروح لنفس المكان
// المشاريع
// تظبيط داته ال my journy
// تظبيط داته ال education
// ترانزيشن في الباكدروب

