import "./App.css";
import { useState } from "react";

import { BoardContent, BoardState, Winner } from "./types";
import { TURNS, WINNING_COMBINATIONS } from "./constants";

import { Tile } from "./components/Tile";
import { Turns } from "./components/Turns";

const initialBoardState: BoardState = {
  board: Array(9).fill(null),
  playsCount: 0,
  currentTurn: TURNS.X,
  winner: null,
};

function App() {
  const [{ board, playsCount, currentTurn, winner }, setBoard] =
    useState<BoardState>(initialBoardState);

  function updateBoard(tileIndex: number) {
    if (board[tileIndex]) return;
    if (winner) return;

    // Update Board's content
    const newBoard = [...board];
    newBoard[tileIndex] = currentTurn;
    const newPlaysCount = playsCount + 1;

    let newWinner: Winner = checkWinner(playsCount, newBoard);
    const isATie = newPlaysCount === newBoard.length && newWinner === null;
    if (isATie) newWinner = false;

    const newTurn: BoardContent = currentTurn === TURNS.X ? TURNS.O : TURNS.X;

    setBoard({
      board: newBoard,
      playsCount: newPlaysCount,
      currentTurn: newTurn,
      winner: newWinner,
    });
  }

  function checkWinner(
    playCount: number,
    boardToCheck: (BoardContent | null)[]
  ) {
    if (playCount < 4) return null;
    return getWinner(boardToCheck);
  }

  function getWinner(board: (BoardContent | null)[]) {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      console.log({ a, b, c });

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleResetBoard() {
    setBoard(initialBoardState);
  }

  return (
    <main>
      <article className="board">
        {board.map((tile, i) => (
          <Tile key={i} index={i} updateBoard={updateBoard}>
            {tile}
          </Tile>
        ))}
        {/* <p>{`${winner}`}</p> */}
      </article>
      <Turns currentTurn={currentTurn} />
      {winner && (
        <section className="winning-modal">
          <article>
            <p>
              Winner is: <b className="winner">{winner}</b>
            </p>
            <button onClick={handleResetBoard}>Reset game</button>
          </article>
        </section>
      )}
      {winner === false && (
        <section className="winning-modal">
          <article>
            <p>
              It is a <b>tie</b>
            </p>
            <button onClick={handleResetBoard}>Reset game</button>
          </article>
        </section>
      )}
    </main>
  );
}

export default App;
