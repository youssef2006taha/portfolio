

// import { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

// export default function StarsBackground() {
//   const canvasRef = useRef(null);
//   const theme = useSelector((state) => state.ui.theme);
//   const isDark = theme === 'dark';

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let animationId;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     // النجوم العادية
//     const stars = Array.from({ length: 140 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 1.8 + 0.5,
//       alpha: Math.random(),
//       speed: Math.random() * 0.015 + 0.005,
//       scrollFactor: Math.random() * 0.4 + 0.1,
//     }));

//     // الشهب (Shooting Stars)
//     let shootingStar = null;
//     const createShootingStar = () => {
//       shootingStar = {
//         x: Math.random() * canvas.width,
//         y: Math.random() * (canvas.height / 2),
//         length: Math.random() * 80 + 40,
//         speed: Math.random() * 10 + 6,
//         alpha: 1,
//         angle: Math.PI / 4, // 45 درجة
//       };
//     };

//     let scrollY = window.scrollY;
//     const handleScroll = () => { scrollY = window.scrollY; };
//     window.addEventListener('scroll', handleScroll);

//     const render = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       const starColor = isDark ? '255, 255, 255' : '109, 40, 217';

//       // رسم النجوم مع الـ Parallax
//       stars.forEach((star) => {
//         star.alpha += star.speed;
//         if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;

//         let drawY = (star.y - scrollY * star.scrollFactor) % canvas.height;
//         if (drawY < 0) drawY += canvas.height;

//         ctx.beginPath();
//         ctx.arc(star.x, drawY, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${starColor}, ${Math.abs(star.alpha)})`;
//         ctx.fill();
//       });

//       // رندر الشهاب
//       if (!shootingStar && Math.random() < 0.015) {
//         createShootingStar();
//       }

//       if (shootingStar) {
//         shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
//         shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
//         shootingStar.alpha -= 0.015;

//         if (shootingStar.alpha <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
//           shootingStar = null;
//         } else {
//           ctx.beginPath();
//           ctx.moveTo(shootingStar.x, shootingStar.y);
//           ctx.lineTo(
//             shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
//             shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
//           );
//           ctx.strokeStyle = `rgba(${isDark ? '192, 132, 252' : '147, 51, 234'}, ${shootingStar.alpha})`;
//           ctx.lineWidth = 2;
//           ctx.stroke();
//         }
//       }

//       animationId = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('scroll', handleScroll);
//       cancelAnimationFrame(animationId);
//     };
//   }, [isDark]);

//   return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 block bg-transparent" />;
// }
