import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import IntroLoader from './pages/introLoader/IntroLoader';
import './App.css';
import Landing from './pages/landing/Landing';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main>
      {/* <AnimatePresence
        mode="wait"
        onExitComplete={() => setAnimationComplete(true)}
      >
        {isLoading && <IntroLoader />}
      </AnimatePresence> */}
      <Landing />
    </main>
  );
};

export default App;
