export type MoviesResponse = SuccessMoviesResult | FailedMoviesResult;

export type Movie = {
  id: string;
  title: string;
  year: string;
  poster: string;
  type: MovieType;
};

type OMDbMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
};

enum MovieType {
  Movie = 'movie',
  Series = 'series',
}

type SuccessMoviesResult = {
  Search: OMDbMovie[];
  totalResults: string;
  Response: 'True';
};

export type FailedMoviesResult = {
  Error: string;
  Response: 'False';
};
