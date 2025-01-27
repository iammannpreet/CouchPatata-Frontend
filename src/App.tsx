import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import AnimatedCounter from "./pages/introLoader/IntroLoader";
import Index from "./components/Landing";
import './App.css'

const App: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container relative">
    {!hasLoaded ? (
      <div className="relative h-screen bg-gray-900 text-white">
        <div className="absolute bottom-[50px] left-[50px] text-9xl">
          <AnimatedCounter from={0} to={100} />
        </div>
      </div>
    ) : (
      <div>
        <Index />
        <MovieList />
      </div>
    )}
  </div>
  );
};

export default App;
