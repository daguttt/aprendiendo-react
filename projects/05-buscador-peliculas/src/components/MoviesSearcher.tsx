import { ChangeEventHandler, FormEventHandler } from 'react';

type MoviesSearcherProps = {
  search: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export function MoviesSearcher({
  search,
  onSubmit,
  onChange,
}: MoviesSearcherProps) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searh">
        <input
          onChange={onChange}
          value={search}
          type="search"
          name="search"
          id="search"
          placeholder="Divergente, Avengers, The Matrix ..."
        />
      </label>
      <button type="submit">Buscar</button>
    </form>
  );
}
