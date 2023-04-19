import { useEffect, useState } from 'react';
import { getRandomCatFat } from '../services/facts';

export function useCatFact() {
  const [fact, setFact] = useState<string | null>(null);

  const refreshFact = () => {
    getRandomCatFat().then((fact) => setFact(fact));
  };
  // Fetch fact
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
