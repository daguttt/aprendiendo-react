import { Movie } from '../types';

function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h4>{movie.title}</h4>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function MoviesNotFoundFallback() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

export function Movies({
  movies,
  isFirstLoad,
}: {
  movies: Movie[];
  isFirstLoad: boolean;
}) {
  const hasMovies = movies.length > 0;

  if (isFirstLoad) return <></>;

  return (
    <>
      {hasMovies ? <MoviesList movies={movies} /> : <MoviesNotFoundFallback />}
    </>
  );
}
