'use client';

import { useEffect } from 'react';
import { startLoaderAnimation } from './animation';
import styles from './style.module.scss';

const AnimatedCounter = () => {
  useEffect(() => {
    startLoaderAnimation();
  }, []);

  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="fixed w-full h-full flex items-end overflow-hidden bg-black">
        {/* FIRST COUNTER */}
        <div className={`${styles.Wrapper} relative w-[180px] h-[360px]`}>
          <div className={`${styles.count} relative flex w-[1080px] h-[360px]`}>
            {[9, 8, 7, 4, 2, 0].map((num, i) => (
              <div key={i} className="relative w-[180px] h-[360px]">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[320px] font-light leading-none">
                  {num}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* SECOND COUNTER */}
        <div className={`${styles.Wrapper} relative w-[180px] h-[360px]`}>
          <div className={`${styles.count} relative flex w-[1080px] h-[360px]`}>
            {[9, 5, 9, 5, 1, 0].map((num, i) => (
              <div key={i} className="relative w-[180px] h-[360px]">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[320px] font-light leading-none">
                  {num}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Revealers */}
        {['red', 'blue', 'black'].map((color, i) => (
          <div key={i} className={styles.revealer}>
            <svg
              width="344"
              height="344"
              viewBox="0 0 344 344"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
                fill={color}
              />
            </svg>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AnimatedCounter;
