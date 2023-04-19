import './App.css';
import { useEffect, useState } from 'react';
import {
  CAT_IMAGES_DOMAIN,
  CAT_IMAGES_ENDPOINT_API_URL,
  FACT_ENDPOINT_API_URL,
} from './constants';
import { CatImageResponse, FactResponse } from './types';

export default function App() {
  const [factFirstWord, setFactFirstWord] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Fetch fact
  useEffect(() => {
    fetch(FACT_ENDPOINT_API_URL)
      .then((res) => res.json())
      .then((data: FactResponse) => {
        const [fistWord] = data.fact.split(' ', 1);
        return setFactFirstWord(fistWord);
      });
  }, []);

  // Fetch image with the fact's first word
  useEffect(() => {
    if (!factFirstWord) return;

    fetch(`${CAT_IMAGES_ENDPOINT_API_URL}/${factFirstWord}?json=true`)
      .then((res) => res.json())
      .then((data: CatImageResponse) => setImageUrl(data.url));
  }, [factFirstWord]);

  return (
    <main>
      <h1>App de Gatittos</h1>
      {factFirstWord && <p>Fact's first word: "{factFirstWord}"</p>}
      {imageUrl && <img src={`${CAT_IMAGES_DOMAIN}/${imageUrl}`} />}
    </main>
  );
}
