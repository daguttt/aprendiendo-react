import { useCallback, useRef, useState } from 'react';
import { FailedMoviesResult, Movie } from '../types';
import { getMoviesBySearch } from '../services/movies';

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<FailedMoviesResult | null>(null);
  const isFirstLoad = useRef<boolean>(true);

  const searchMovies = useCallback(
    async ({ newSearch }: { newSearch: string }) => {
      isFirstLoad.current = false;
      let moviesRes;

      try {
        moviesRes = await getMoviesBySearch({ search: newSearch });
      } catch (e) {
        console.error(e);
      }

      if (!moviesRes) return;

      if (moviesRes.Response === 'False') {
        setError(moviesRes);
        setMovies([]);
        return;
      }

      const mappedMovies = moviesRes.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        type: movie.Type,
        year: movie.Year,
      }));
      setMovies(mappedMovies);
      setError(null);
    },
    []
  );

  return { movies, error, isFirstLoad: isFirstLoad.current, searchMovies };
}
