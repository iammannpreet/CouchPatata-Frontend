'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import logo from '../../../public/logo.svg';
import styles from './style.module.scss';
import { startLoaderAnimation } from './animation';

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

const IntroLoader = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    startLoaderAnimation();

    gsap.fromTo(
      logoRef.current,
      { y: 300 },
      {
        y: 0,
        duration: 1.5,
        ease: 'bounce.out',
        delay: 6,
      }
    );
  }, []);

  const Counter = ({ numbers }: { numbers: number[] }) => (
    <div className={`${styles.Wrapper} relative w-[180px] h-[360px]`}>
      <div className={`${styles.count} relative flex w-[1080px] h-[360px]`}>
        {numbers.map((num, i) => (
          <div key={i} className="relative w-[180px] h-[360px]">
            <h1
              className="absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 text-[270px]"
            >
              {num}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed w-full h-full bg-[#BBCE8A] text-[#D16014] flex overflow-hidden"
      style={{ top: 0 }}
    >
      <Counter numbers={[9, 8, 7, 4, 2, 0]} />
      <Counter numbers={[9, 5, 9, 5, 1, 0]} />

      <div className="absolute inset-0 flex items-center justify-center z-50">
        <img
          ref={logoRef}
          src={logo}
          alt="Logo"
          className="max-w-full max-h-full"
        />
      </div>
    </motion.main>
  );
};

export default IntroLoader;
