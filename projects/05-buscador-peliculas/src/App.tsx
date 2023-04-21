import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { MoviesSearcher } from './components/MoviesSearcher';

export function App() {
  const { movies, error, searchMovies, isFirstLoad } = useMovies();

  const [search, setSearch] = useState<string>('');

  const handleChangeSearch = useCallback<ChangeEventHandler>(
    (e: ChangeEvent) => {
      const newSearch = (e.target as HTMLInputElement).value;
      setSearch(newSearch);
    },
    []
  );

  const handleSubmitSearch = useCallback<FormEventHandler>(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fields = Object.fromEntries(
        new FormData(e.target as HTMLFormElement)
      );
      if (typeof fields['search'] !== 'string') return;

      const newSearch = fields['search'];
      if (newSearch) searchMovies({ newSearch });
    },
    []
  );

  return (
    <div className="container">
      <header>
        <h1>Buscador de Películas</h1>
        <MoviesSearcher
          onChange={handleChangeSearch}
          onSubmit={handleSubmitSearch}
          search={search}
        />
      </header>
      <main>
        <Movies movies={movies} isFirstLoad={isFirstLoad} />
      </main>
    </div>
  );
}
