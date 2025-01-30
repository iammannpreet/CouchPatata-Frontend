import React from 'react';
import AnimatedCounter from './pages/introLoader/IntroLoader';
import MovieList from './components/MovieList';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <AnimatedCounter />
      {/* <MovieList /> */}
    </>
  );
};

export default App;
