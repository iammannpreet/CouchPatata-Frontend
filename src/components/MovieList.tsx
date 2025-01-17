import { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../services/api';

interface Movie {
  _id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [genre, setGenre] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [order, setOrder] = useState<string>('desc');
  const [page] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false)

  // Load popular movies by default
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

  // Handle full search with filters
  const handleSearch = () => {
    setLoading(true);
    searchMovies({
      title: searchQuery,
      genre: genre || undefined,
      year: year || undefined,
      sort_by: sortBy as 'popularity' | 'vote_average' | 'release_date',
      order: order as 'asc' | 'desc',
      page: page,
      limit: 12,
    })
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

  // Handle Enter key for search
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="p-4">
      {/* 🔍 Search Bar */}
      <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border rounded-md px-4 py-2 w-full md:w-1/3"
        />

        {/* 🎬 Genre Filter */}
        <select
          value={genre || ''}
          onChange={(e) => setGenre(Number(e.target.value) || null)}
          className="border rounded-md px-4 py-2"
        >
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
        </select>

        {/* 📅 Year Filter */}
        <input
          type="number"
          placeholder="Year"
          value={year || ''}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border rounded-md px-4 py-2 w-24"
        />

        {/* 🔃 Sort By */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="popularity">Popularity</option>
          <option value="vote_average">Rating</option>
          <option value="release_date">Release Date</option>
        </select>

        {/* 🔼🔽 Order */}
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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
