import React, { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';

const IntroLoader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for the icon (spin/zoom in)
      gsap.fromTo(
        iconRef.current,
        { scale: 0, rotate: 0 },
        {
          scale: 1,
          rotate: 360,
          duration: 1,
          ease: Power2.easeOut,
          delay: 0.3,
        }
      );

      // Timeline for the text (fade/slide in)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: Power2.easeOut,
          delay: 1.0,
        }
      );

      // Fade out the entire loader
      gsap.to(loaderRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.6,
        delay: 2.0,
        ease: Power2.easeInOut,
        onComplete: () => {
          // Optionally remove the loader from the DOM or set a "loaded" state
        },
      });
    }, loaderRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Icon / Clapperboard / Reel */}
      <div
        ref={iconRef}
        className="mb-4 h-16 w-16 bg-white text-gray-900 rounded-full flex items-center justify-center"
      >
        {/* This could be replaced with an actual icon (SVG, image, etc.) */}
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.188 4.438c-.41-.205-2.73-.641-2.73-.641-1.023.227-3.149.322-3.149.322-.428.115-.502.676-.248 1.055l1.06 1.529-10.12 2.372-.876-1.51c-.261-.451-.84-.53-1.266-.245 0 0-2.268 1.573-2.513 1.785C.271 9.451 0 10.295 0 10.826v5.871c0 .885.635 1.648 1.444 1.804l8.687 1.645c.997.188 2.048.003 2.888-.508l7.748-4.73c.73-.447 1.186-1.165 1.233-1.966.068-1.144.081-2.978.081-3.188 0-1.449-.69-2.763-1.893-3.216zm-5.355.998c.442-.03 2.168-.197 2.168-.197.347.073 1.847.411 2.17.53.673.254 1.117.855 1.117 1.587v1.63c0 .203-.012 1.898-.073 3.055-.017.317-.2.668-.465.824l-7.748 4.73c-.396.242-.93.345-1.527.23l-8.687-1.645c-.297-.056-.517-.31-.517-.616v-5.871c0-.108.042-.213.116-.279.111-.096 2.513-1.782 2.513-1.782.056-.04.125-.06.195-.06.089 0 .178.04.232.12l1.064 1.835c.163.281.496.42.806.34l10.955-2.567c.338-.08.606-.31.714-.61.108-.299.054-.63-.143-.885l-1.063-1.534c-.121-.179-.096-.448.03-.636.124-.186.315-.316.521-.334z" />
        </svg>
      </div>

      {/* Title or Tagline */}
      <h1
        ref={textRef}
        className="text-2xl font-semibold tracking-widest text-center"
      >
        MovieMania
      </h1>
    </div>
  );
};

export default IntroLoader;
