import { FormEvent, FormEventHandler, useCallback } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

export function App() {
  const { movies } = useMovies();

  return (
    <div className="container">
      <header>
        <h1>Buscador de Películas</h1>
        <form>
          <label htmlFor="searh">
            Nombre de la película que quieras buscar
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Divergente, Avengers, The Matrix ..."
            />
          </label>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
