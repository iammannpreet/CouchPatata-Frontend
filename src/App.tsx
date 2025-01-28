import React, { useState, useEffect } from 'react';
import AnimatedCounter from './pages/introLoader/IntroLoader';
import Landing from './components/Landing';
import MovieList from './components/MovieList';
import './App.css';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      document.body.style.overflow = ''; // Re-enable scrolling
      window.scrollTo(0, 0);
    }, 5200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main>
      {/* Preloader logic with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <AnimatedCounter key="animated-counter" from={0} to={100} />
          </div>
        )}
      </AnimatePresence>
      {!isLoading && (
        <>
          {/* Render content only after loading */}

          <MovieList />
        </>
      )}
    </main>
  );
};

export default App;
