// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export const startLandingAnimation = (
//   titlesContainer = document.querySelector('.titles') as HTMLDivElement,
//   imagesContainer = document.querySelector('.images') as HTMLDivElement,
//   stickySection: HTMLElement
// ) => {
//   const carsPositions = [
//     { top: '30%', left: '55%' },
//     { top: '20%', left: '25%' },
//     { top: '50%', left: '10%' },
//     { top: '60%', left: '40%' },
//     { top: '30%', left: '30%' },
//     { top: '60%', left: '60%' },
//     { top: '20%', left: '50%' },
//     { top: '60%', left: '10%' },
//     { top: '20%', left: '40%' },
//     { top: '45%', left: '55%' },
//   ];

//   const moveDistance = window.innerWidth * 3;

//   // Create image cards dynamically
//   for (let i = 1; i <= 10; i++) {
//     const card = document.createElement('div');
//     card.className = `card card-${i}`;

//     const img = document.createElement('img');
//     img.src = `/scrollImages/img${i}.webp`;
//     img.alt = `Image ${i}`;
//     card.appendChild(img);

//     const position = carsPositions[i - 1];
//     card.style.position = 'absolute';
//     card.style.top = position.top;
//     card.style.left = position.left;

//     imagesContainer.appendChild(card);
//   }

//   const cards = imagesContainer.querySelectorAll('.card');
//   cards.forEach((card) => {
//     gsap.set(card, {
//       z: -50000,
//       scale: 0,
//     });
//   });

//   ScrollTrigger.create({
//     trigger: stickySection,
//     start: 'top top',
//     end: `+=${window.innerHeight * 5}px`,
//     pin: true,
//     scrub: 1,
//     onUpdate: (self) => {
//       const xPosition = -moveDistance * self.progress;
//       gsap.set(titlesContainer, { x: xPosition });

//       const velocity = self.getVelocity();
//       const normalizedVelocity =
//         velocity !== 0 ? velocity / Math.abs(velocity) : 0;
//       const maxOffset = 30;
//       const currentSpeed = Math.min(Math.abs(velocity / 500), maxOffset);
//       const isAtEdge = self.progress <= 0 || self.progress >= 1;

//       document.querySelectorAll('.title').forEach((titleElement) => {
//         const title1 = titleElement.querySelector('.title-1') as HTMLElement;
//         const title2 = titleElement.querySelector('.title-2') as HTMLElement;
//         const title3 = titleElement.querySelector('.title-3') as HTMLElement;

//         if (isAtEdge) {
//           gsap.to([title1, title2, title3], {
//             xPercent: -50,
//             x: 0,
//             duration: 0.5,
//             ease: 'power2.out',
//             overwrite: true,
//           });
//         } else {
//           const baseOffset = normalizedVelocity * currentSpeed;

//           gsap.to(title1, {
//             xPercent: -50,
//             x: `${baseOffset * 4}px`,
//             duration: 0.2,
//             ease: 'power1.out',
//             overwrite: 'auto',
//           });

//           gsap.to(title2, {
//             xPercent: -50,
//             x: `${baseOffset * 2}px`,
//             duration: 0.2,
//             ease: 'power1.out',
//             overwrite: 'auto',
//           });

//           gsap.to(title3, {
//             xPercent: -50,
//             x: `${baseOffset}px`,
//             duration: 0.2,
//             ease: 'power1.out',
//             overwrite: 'auto',
//           });
//         }
//       });

//       cards.forEach((card, index) => {
//         const staggerOffset = index * 0.075;
//         const scaledProgress = (self.progress - staggerOffset) * 3;
//         const individualProgress = Math.max(0, Math.min(1, scaledProgress));
//         const targetZ = index === cards.length - 1 ? 1500 : 2000;
//         const newZ = -50000 + (targetZ + 50000) * individualProgress;
//         const scaleProgress = Math.min(1, individualProgress * 10);
//         const scale = Math.max(0, Math.min(1, scaleProgress));

//         gsap.to(card, {
//           z: newZ,
//           scale: scale,
//         });
//       });
//     },
//   });

//   ScrollTrigger.refresh();
// };
