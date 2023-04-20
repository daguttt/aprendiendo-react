import withResults from '../mocks/with-results.json';
import { Movie } from '../types';

export function useMovies() {
  const movies = withResults.Search ?? [];
  const mappedMovies: Movie[] = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));

  return { movies: mappedMovies };
}
