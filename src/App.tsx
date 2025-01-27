import React, { useState, useEffect } from "react";
import AnimatedCounter from "./pages/introLoader/IntroLoader";
import Landing from "./components/Landing";
import MovieList from "./components/MovieList";
import "./App.css";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 3200)
      }
    )()
  }, [])
  return (
    <main>
      {/* Preloader logic with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && 
            <AnimatedCounter key="animated-counter" from={0} to={100} />
        }
      </AnimatePresence> 
          {/* <Landing /> */}
          <MovieList />
    </main>
  );
};

export default App;
