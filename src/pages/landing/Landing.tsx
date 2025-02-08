'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { startLandingAnimation } from './animation';

function Landing() {
  const titlesRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLElement>(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Wait for React to complete rendering
    setTimeout(() => {
      setIsRendered(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (isRendered && titlesRef.current && stickySectionRef.current) {
      console.log('✅ DOM Ready. Starting GSAP animation.');
      startLandingAnimation();
    }
  }, [isRendered]);

  const Genre = ({ names }: { names: string[] }) => (
    <div className="bg-white">
      <div className={styles.titles} ref={titlesRef}>
        {names.map((name, index) => (
          <div className={styles.title} key={index}>
            <h1 className={styles.title1}>{name}</h1>
            <h1 className={styles.title2}>{name}</h1>
            <h1 className={styles.title3}>{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-black">
      <section className={styles.hero}>
        <h1>(Scroll if you dare)</h1>
      </section>
      <section className="Genre" ref={stickySectionRef}>
        <Genre
          names={['Showcase Hub', 'Nova Stream', 'Circle 30', 'Bites & Banter']}
        />
      </section>
      <section className={styles.outro}>
        <h1>(That's a wrap)</h1>
      </section>
    </div>
  );
}

export default Landing;
