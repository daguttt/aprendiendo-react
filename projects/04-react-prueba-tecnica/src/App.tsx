import './App.css';
import { useCatFact, useCatImageFromWord } from './hooks';

export default function App() {
  const { fact, refreshFact } = useCatFact();
  const firstWordFact = fact && fact.split(' ', 1).join(' ');

  const { imageUrl: catImageUrl } = useCatImageFromWord({
    word: firstWordFact,
  });

  console.log({ firstWordFact });

  return (
    <main>
      <h1>App de Gatittos</h1>
      <button onClick={() => refreshFact()}>Refresh Fact</button>
      {firstWordFact && <p>Fact's first word: "{firstWordFact}"</p>}
      {catImageUrl && (
        <img
          src={catImageUrl}
          alt={`Cat Image saying the word: "${firstWordFact}"`}
        />
      )}
    </main>
  );
}
