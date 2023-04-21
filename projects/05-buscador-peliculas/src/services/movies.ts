import { MOVIES_API_URL } from '../constants';
import { MoviesResponse } from '../types';

export async function getMoviesBySearch({ search }: { search: string }) {
  return fetch(`${MOVIES_API_URL}&s=${search}`)
    .then((res) => res.json())
    .then((data: MoviesResponse) => data);
}
