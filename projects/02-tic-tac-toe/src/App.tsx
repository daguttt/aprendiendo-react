import "./App.css";
import { useCallback, useState } from "react";

import { Turn, BoardState, Winner } from "./types";
import { TURNS } from "./constants";

import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import { checkWinner, getNewTurn } from "./logic/board";

const initialBoardState: BoardState = {
  board: Array(9).fill(null),
  playsCount: 0,
  currentTurn: TURNS.X,
  winner: null,
};

function App() {
  const [{ board, playsCount, currentTurn, winner }, setBoard] =
    useState<BoardState>(initialBoardState);

  const updateBoard = useCallback(
    (tileIndex: number) => {
      if (board[tileIndex] || winner) return;

      // Update Board's content
      const newBoard = [...board];
      newBoard[tileIndex] = currentTurn;
      const newPlaysCount = playsCount + 1;

      let newWinner: Winner = checkWinner({
        playsCount,
        boardToCheck: newBoard,
      });
      const isATie = newPlaysCount === newBoard.length && newWinner === null;
      if (isATie) newWinner = false;

      const newTurn: Turn = getNewTurn({ currentTurn });

      setBoard({
        board: newBoard,
        playsCount: newPlaysCount,
        currentTurn: newTurn,
        winner: newWinner,
      });
    },
    [board]
  );

  const handleResetBoard = useCallback(() => {
    setBoard(initialBoardState);
  }, []);

  return (
    <main>
      <Board board={board} updateBoard={updateBoard} />
      <Turns currentTurn={currentTurn} />
      <WinnerModal winner={winner} handleResetBoard={handleResetBoard} />
    </main>
  );
}

export default App;
