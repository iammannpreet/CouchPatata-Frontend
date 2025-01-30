'use client';

import styles from './style.module.scss';
import { useEffect } from 'react';
import { startLoaderAnimation } from './animation'; // Import animation function

const AnimatedCounter = () => {
  useEffect(() => {
    startLoaderAnimation();
  }, []);
  return (
    <main>
      <div className={styles.loader}>
        {/* FIRST COUNTER */}
        <div className={styles.Wrapper}>
          <div className={styles.count}>
            <div className={styles.digit}>
              <h1>9</h1>
            </div>
            <div className={styles.digit}>
              <h1>8</h1>
            </div>
            <div className={styles.digit}>
              <h1>7</h1>
            </div>
            <div className={styles.digit}>
              <h1>4</h1>
            </div>
            <div className={styles.digit}>
              <h1>2</h1>
            </div>
            <div className={styles.digit}>
              <h1>0</h1>
            </div>
          </div>
        </div>

        {/* SECOND COUNTER */}
        <div className={styles.Wrapper}>
          <div className={styles.count}>
            <div className={styles.digit}>
              <h1>9</h1>
            </div>
            <div className={styles.digit}>
              <h1>5</h1>
            </div>
            <div className={styles.digit}>
              <h1>9</h1>
            </div>
            <div className={styles.digit}>
              <h1>5</h1>
            </div>
            <div className={styles.digit}>
              <h1>1</h1>
            </div>
            <div className={styles.digit}>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className={styles.revealer}>
          <svg
            width="344"
            height="344"
            viewBox="0 0 344 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
              fill="red"
            />
          </svg>
        </div>
        <div className={styles.revealer}>
          <svg
            width="344"
            height="344"
            viewBox="0 0 344 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
              fill="blue"
            />
          </svg>
        </div>
        <div className={styles.revealer}>
          <svg
            width="344"
            height="344"
            viewBox="0 0 344 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-7.51836e-06 172L97.6202 169.159C136.649 168.022 168.022 136.649 169.158 97.6202L172 2.29992e-05L174.841 97.6202C175.978 136.649 207.351 168.022 246.38 169.159L344 172L246.38 174.841C207.351 175.978 175.978 207.351 174.841 246.38L172 344L169.159 246.38C168.022 207.351 136.649 175.978 97.6202 174.842L-7.51836e-06 172Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.siteInfo}>
          <div className={styles.line}>
            <p>Digital & Brand Design</p>
          </div>
          <div className={styles.line}>
            <p>Whatever</p>
          </div>
          <div className={styles.toggleBtn}>
            <button className="text-red-900">Toggle</button>
          </div>
          <div className={styles.header}>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimatedCounter;
