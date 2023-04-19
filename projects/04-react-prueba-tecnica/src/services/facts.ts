import {
  CAT_IMAGES_ENDPOINT_API_URL,
  FACT_ENDPOINT_API_URL,
} from '../constants';
import { CatImageResponse, FactResponse } from '../types';

export async function getRandomCatFat() {
  const res = await fetch(FACT_ENDPOINT_API_URL);
  const data: FactResponse = await res.json();
  return data.fact;
}

export async function getRandomCatImageFromWord({ word }: { word: string }) {
  const res = await fetch(`${CAT_IMAGES_ENDPOINT_API_URL}/${word}?json=true`);
  const data: CatImageResponse = await res.json();
  return data.url;
}
