// animation.ts
import { gsap } from 'gsap';

export const startLoaderAnimation = (onGsapComplete?: () => void) => {
  const interval = setInterval(() => {
    const countElements = document.querySelectorAll('[class*="count"]');
    if (countElements.length > 0) {
      clearInterval(interval);

      const windowWidth = window.innerWidth;
      const wrapperWidth = 180;
      const finalPosition = windowWidth - wrapperWidth;
      const stepDistance = finalPosition / 6;
      const tl = gsap.timeline();

      // Move counters left
      tl.to('[class*="count"]', {
        x: -900,
        duration: 0.85,
        delay: 0.5,
        ease: 'power4.inOut',
      });

      // Steps for each counter block
      for (let i = 1; i <= 6; i++) {
        const xPosition = -900 + i * 180;
        tl.to(countElements, {
          x: xPosition,
          duration: 0.85,
          ease: 'power4.inOut',
          onStart: () => {
            document
              .querySelectorAll('[class*="Wrapper"]')
              .forEach((wrapper) => {
                gsap.to(wrapper, {
                  x: stepDistance * i,
                  duration: 0.85,
                  ease: 'power4.inOut',
                });
              });
          },
        });
      }

      // Scale revealers
      gsap.set('[class*="revealer"] svg', { scale: 0 });
      const delays = [6, 6.5, 7];

      document.querySelectorAll('[class*="revealer"] svg').forEach((el, i) => {
        gsap.to(el, {
          scale: 45,
          duration: 3,
          delay: delays[i],
          ease: 'power4.inOut',
          onComplete: () => {
            // When the last revealer is done, trigger the callback
            if (i === delays.length - 1) {
              onGsapComplete && onGsapComplete();
            }
          },
        });
      });
    }
  });
};
