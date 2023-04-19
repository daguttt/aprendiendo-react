import { useEffect, useState } from 'react';
import { CAT_IMAGES_DOMAIN } from '../constants';
import { getRandomCatImageFromWord } from '../services/facts';

type UseCatImageFromWordOptions = {
  word: string | null;
};

type UseCatImageFromWordResult = {
  imageUrl: string | null;
};

export function useCatImageFromWord({
  word,
}: UseCatImageFromWordOptions): UseCatImageFromWordResult {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Fetch image with the fact's first word
  useEffect(() => {
    if (!word) return;
    getRandomCatImageFromWord({ word }).then((newImageUrl) =>
      setImageUrl(newImageUrl)
    );
  }, [word]);

  return { imageUrl: `${CAT_IMAGES_DOMAIN}/${imageUrl}` };
}
