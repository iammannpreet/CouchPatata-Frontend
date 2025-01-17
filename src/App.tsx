import React, { useState, useEffect } from 'react';
import IntroLoader from './pages/introLoader/IntroLoader';
import MovieList from './components/MovieList';
import SmoothScrollWrapper from './common/scrollWrapper';

const App: React.FC = () => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!hasLoaded && <IntroLoader />}
     
     
     <MovieList />
 
    </>

  );
};

export default App;
