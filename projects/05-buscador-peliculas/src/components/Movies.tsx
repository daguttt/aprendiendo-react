import { Movie } from '../types';

function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <section>
      {movies.map((movie) => (
        <article key={movie.id}>
          <header>
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
          </header>
          <img src={movie.poster} alt={movie.title} />
        </article>
      ))}
    </section>
  );
}

function MoviesNotFoundFallback() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

export function Movies({ movies }: { movies: Movie[] }) {
  const hasMovies = movies.length > 0;

  return (
    <>
      {hasMovies ? <MoviesList movies={movies} /> : <MoviesNotFoundFallback />}
    </>
  );
}
