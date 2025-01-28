import { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../services/api';
import { gsap } from 'gsap';

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  useEffect(() => {
    if (!loading && movies.length > 0) {
      animateGridSections();
    }
  }, [loading, movies]);

  const loadPopularMovies = () => {
    setLoading(true);
    fetchPopularMovies()
      .then((response) => {
        const movieData = response.data.movies || [];
        setMovies(movieData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching popular movies:', error);
        setLoading(false);
      });
  };

  const animateGridSections = () => {
    const timeline = gsap.timeline();

    // Top-left section animation
    timeline.fromTo(
      '.movie-grid-top-left .movie-card',
      { opacity: 0, x: -200, y: -200 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );

    // Top-right section animation
    timeline.fromTo(
      '.movie-grid-top-right .movie-card',
      { opacity: 0, x: 200, y: -200 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        onComplete: () => {
          // Adjust layout for top sections
          gsap.to('.movie-grid-top', {
            height: '50vh',
            width: '100%',
            duration: 0.5,
          });
        },
      }
    );

    // Bottom-left section animation
    timeline.fromTo(
      '.movie-grid-bottom-left .movie-card',
      { opacity: 0, x: -200, y: 200 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );

    // Bottom-right section animation
    timeline.fromTo(
      '.movie-grid-bottom-right .movie-card',
      { opacity: 0, x: 200, y: 200 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        onComplete: () => {
          // Adjust layout for bottom sections
          gsap.to('.movie-grid-bottom', {
            height: '50vh',
            width: '100%',
            duration: 0.5,
          });
        },
      }
    );
  };

  return (
    <div className="bg-zinc-100">
      {loading ? (
        <p className="text-center">Loading movies...</p>
      ) : (
        <div className="grid grid-rows-2 h-screen">
          {/* Top sections */}
          <div className="movie-grid-top grid grid-cols-2 h-1/2">
            {/* Top-left section */}
            <div className="movie-grid-top-left grid grid-cols-2 gap-2 p-2">
              {movies.slice(0, movies.length / 4).map((movie) => (
                <div key={movie._id} className="movie-card shadow-lg p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-md object-cover h-full w-full"
                  />
                  <h2 className="text-sm font-semibold mt-2">{movie.title}</h2>
                </div>
              ))}
            </div>
            {/* Top-right section */}
            <div className="movie-grid-top-right grid grid-cols-2 gap-2 p-2">
              {movies
                .slice(movies.length / 4, movies.length / 2)
                .map((movie) => (
                  <div key={movie._id} className="movie-card shadow-lg p-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-md object-cover h-full w-full"
                    />
                    <h2 className="text-sm font-semibold mt-2">
                      {movie.title}
                    </h2>
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom sections */}
          <div className="movie-grid-bottom grid grid-cols-2 h-1/2">
            {/* Bottom-left section */}
            <div className="movie-grid-bottom-left grid grid-cols-2 gap-2 p-2">
              {movies
                .slice(movies.length / 2, (3 * movies.length) / 4)
                .map((movie) => (
                  <div key={movie._id} className="movie-card shadow-lg p-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="rounded-md object-cover h-full w-full"
                    />
                    <h2 className="text-sm font-semibold mt-2">
                      {movie.title}
                    </h2>
                  </div>
                ))}
            </div>
            {/* Bottom-right section */}
            <div className="movie-grid-bottom-right grid grid-cols-2 gap-2 p-2">
              {movies.slice((3 * movies.length) / 4).map((movie) => (
                <div key={movie._id} className="movie-card shadow-lg p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-md object-cover h-full w-full"
                  />
                  <h2 className="text-sm font-semibold mt-2">{movie.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
