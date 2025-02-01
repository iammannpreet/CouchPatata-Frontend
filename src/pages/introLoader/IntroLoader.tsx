'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  useEffect(() => {
    startLoaderAnimation();
  }, []);

  const Counter = ({ numbers }: { numbers: number[] }) => (
    <div className={`${styles.Wrapper} relative w-[180px] h-[360px]`}>
      <div className={`${styles.count} relative flex w-[1080px] h-[360px]`}>
        {numbers.map((num, i) => (
          <div key={i} className="relative w-[180px] h-[360px]">
            <h1
              className="absolute top-1/2 left-1/2 
               -translate-x-1/2 -translate-y-1/2 text-[320px] 
               font-light leading-none"
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
      className="fixed w-full h-full bg-black text-white flex items-end overflow-hidden"
      style={{ top: 0 }}
    >
      {/* Using the Counter Components */}
      <Counter numbers={[9, 8, 7, 4, 2, 0]} />
      <Counter numbers={[9, 5, 9, 5, 1, 0]} />

      <div className={styles.revealer}>
        <svg>
          <motion.path initial="initial" exit="exit" />
        </svg>
      </div>
    </motion.main>
  );
};

export default IntroLoader;
