import "./App.css";
import { useState } from "react";

import { BoardContent, BoardState } from "./types";
import { TURNS, WINNING_COMBINATIONS } from "./constants";

import { Tile } from "./components/Tile";

const initialBoardState: BoardState = {
  board: Array(9).fill(null),
  playsCount: 0,
  turn: TURNS.X,
  winner: null,
};

function App() {
  const [{ board, playsCount, turn, winner }, setBoard] =
    useState<BoardState>(initialBoardState);


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
    <main>
      <article className="board">
        {board.map((tile, i) => (
          <Tile key={i} index={i} updateBoard={updateBoard}>
            {tile}
          </Tile>
        ))}
      </article>
    </main>
  );
}

export default App;
