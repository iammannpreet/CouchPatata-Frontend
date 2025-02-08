import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const startLandingAnimation = () => {
  const titlesContainer = document.querySelector('[class*="titles"]');
  if (!titlesContainer) {
    console.error('❌ `.titles` not found! Animation will not start.');
    return;
  }

  console.log('✅ `.titles` found. Running animation...');

  const moveDistance = window.innerWidth * 3;
  gsap.from(titlesContainer, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
  });

  ScrollTrigger.create({
    trigger: '.Genre',
    start: 'top top',
    end: `+=${window.innerHeight * 5}px`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const xPosition = -moveDistance * self.progress;
      gsap.set(titlesContainer, { x: xPosition });
    },
  });

  ScrollTrigger.refresh();
};
