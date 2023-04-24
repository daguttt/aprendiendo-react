import "./App.css";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Turn, BoardState, Winner } from "./types";
import { TURNS } from "./constants";

import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";
import {
  checkWinner,
  getNewTurn,
  getSavedBoard,
  saveBoard,
} from "./logic/board";

const initialBoardState: BoardState = {
  board: Array(9).fill(null),
  playsCount: 0,
  currentTurn: TURNS.X,
  winner: null,
};

function App() {
  const [{ board, playsCount, currentTurn, winner }, setBoardState] =
    useState<BoardState>(initialBoardState);

  useEffect(() => {
    const savedBoard = getSavedBoard();
    if (savedBoard) setBoardState(savedBoard);
  }, []);

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

      const newBoardState: BoardState = {
        board: newBoard,
        playsCount: newPlaysCount,
        currentTurn: newTurn,
        winner: newWinner,
      };
      setBoardState(newBoardState);
      saveBoard({ boardToSave: newBoardState });
    },
    [board]
  );

  const handleResetBoard = useCallback(() => {
    setBoardState(initialBoardState);
    saveBoard({ boardToSave: initialBoardState });
  }, []);

  return (
    <main>
      <Board board={board} updateBoard={updateBoard} />
      <Turns currentTurn={currentTurn} />
      <button onClick={handleResetBoard}>Reset Game</button>
      <WinnerModal winner={winner} handleResetBoard={handleResetBoard} />
    </main>
  );
}

export default App;
