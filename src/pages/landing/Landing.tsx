'use client';

import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { startLandingAnimation } from './animation';

function Landing() {
  const titlesRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (titlesRef.current && imagesRef.current && stickySectionRef.current) {
  //     startLandingAnimation(
  //       titlesRef.current,
  //       imagesRef.current,
  //       stickySectionRef.current
  //     );
  //   }
  // }, []);

  return (
    <div className="text-black">
      <section className={styles.hero}>
        <h1>(Scroll if you dare)</h1>
      </section>

      <section ref={stickySectionRef} className={styles.sticky}>
        <div ref={titlesRef} className={styles.titles}>
          {['Showcase Hub', 'Nova Stream', 'Circle 30', 'Bites & Banter'].map(
            (title, index) => (
              <div key={index} className={styles.title}>
                <h1 className={styles.title1}>{title}</h1>
                <h1 className={styles.title2}>{title}</h1>
                <h1 className={styles.title3}>{title}</h1>
              </div>
            )
          )}
        </div>
        <div ref={imagesRef} className={styles.images}></div>
      </section>

      <section className={styles.outro}>
        <h1>(That's a wrap)</h1>
      </section>
    </div>
  );
}

export default Landing;
