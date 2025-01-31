import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import IntroLoader from './pages/introLoader/IntroLoader';
import './App.css';
import MovieList from './components/MovieList';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);
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
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setAnimationComplete(true)}
      >
        {isLoading && <IntroLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {animationComplete && <MovieList />}
    </main>
  );
};

export default App;
