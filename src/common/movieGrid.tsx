import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const MovieGrid: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            scroller: '[data-scroll-container]',
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el!)}
          className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-white text-xl font-bold"
          data-scroll
        >
          Movie {i + 1}
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
