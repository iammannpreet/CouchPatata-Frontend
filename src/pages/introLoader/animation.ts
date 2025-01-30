import { gsap } from 'gsap';

export const startLoaderAnimation = () => {
  const interval = setInterval(() => {
    const countElements = document.querySelectorAll('[class*="count"]');
    if (countElements.length > 0) {
      clearInterval(interval);

      const windowWidth = window.innerWidth;
      const wrapperWidth = 180;
      const finalPosition = windowWidth - wrapperWidth;
      const stepDistance = finalPosition / 6;
      const tl = gsap.timeline();

      tl.to('[class*="count"]', {
        x: -900,
        duration: 0.85,
        delay: 0.5,
        ease: 'power4.inOut',
      });

      for (let i = 1; i <= 6; i++) {
        const xPosition = -900 + i * 180;
        tl.to(countElements, {
          x: xPosition,
          duration: 0.85,
          ease: 'power4.inOut',
          onStart: () => {
            const countWrapper = document.querySelector('[class*="Wrapper"]');
            if (countWrapper) {
              gsap.to(countWrapper, {
                x: stepDistance * i,
                duration: 0.85,
                ease: 'power4.inOut',
              });
            }
          },
        });
      }

      gsap.set('[class*="revealer"] svg', { scale: 0 });

      const delays = [6, 6.5, 7];

      document.querySelectorAll('[class*="revealer"] svg').forEach((el, i) => {
        gsap.to(el, {
          scale: 45,
          duration: 1.5,
          delay: delays[i],
          ease: 'power4.inOut',
          onComplete: () => {
            if (i === delays.length - 1) {
              document.querySelector('[class*="loader"]')?.remove();
            }
          },
        });
      });

      const headerTitle = document.querySelector('[class*="header"] h1');
      if (headerTitle) {
        gsap.to(headerTitle, {
          onStart: () => {
            const toggleBtn = document.querySelector('[class*="toggleBtn"]');
            if (toggleBtn) {
              gsap.to(toggleBtn, {
                scale: 1,
                duration: 1,
                ease: 'power4.inOut',
              });
            }

            const lineElements = document.querySelectorAll('[class*="line"] p');
            if (lineElements.length > 0) {
              gsap.to(lineElements, {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
              });
            }
          },
          rotateY: 0,
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          delay: 8,
        });
      }
    }
  }, 200);
};
