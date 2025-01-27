"use client";

import styles from "./style.module.scss";
import { KeyframeOptions, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({ from, to, animationOptions }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Set initial value
    element.textContent = `${from}%`;

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = `${to}%`;
      return;
    }

    const controls = animate(from, to, {
      duration: 3,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = `${value.toFixed(0)}%`;
      },
    });

    // Cleanup on unmount
    return () => {
      controls.stop();
    };
  }, [from, to, animationOptions]);

  return(<div className={styles.introduction}> 
    <span ref={ref} />
</div>
  );
};

export default AnimatedCounter;
