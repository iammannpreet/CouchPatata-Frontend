import { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../services/api';

interface Movie {
  _id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // 🔍 Fetch Popular Movies (Default)
  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = () => {
    setLoading(true);
    fetchPopularMovies()
      .then((response) => {
        const movieData = response.data.movies || [];
        setMovies(movieData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
        setLoading(false);
      });
  };

  // 🔎 Handle Search
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      loadPopularMovies(); // If search is empty, load popular movies
      return;
    }

    setLoading(true);
    searchMovies(searchQuery)
      .then((response) => {
        const movieData = response.data.movies || [];
        setMovies(movieData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error searching movies:", error);
        setLoading(false);
      });
  };

  // 🔄 Handle Enter Key Press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-4">
      {/* 🔎 Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border border-gray-400 rounded-md px-4 py-2 w-1/2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* 🎬 Movie Grid */}
      {loading ? (
        <p className="text-center">Loading movies...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie._id} className="shadow-lg p-2 hover:scale-105 transition-transform">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;
