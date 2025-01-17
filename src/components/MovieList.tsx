import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/api';

interface Movie {
  _id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);  // ✅ Empty array

  useEffect(() => {
    fetchPopularMovies()
      .then((response) => {
        const movieData = response.data.movies || [];  // ✅ Handle missing data
        setMovies(movieData);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  if (!Array.isArray(movies)) {
    return <p>Loading movies...</p>;  // ✅ Handle unexpected data
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div key={movie._id} className="shadow-lg p-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2 className="text-lg font-semibold">{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
