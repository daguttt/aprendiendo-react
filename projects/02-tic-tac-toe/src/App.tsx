import "./App.css";
import { useState } from "react";

import { BoardContent, BoardState, Winner } from "./types";
import { TURNS, WINNING_COMBINATIONS } from "./constants";

import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/Board";

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
      <Board board={board} updateBoard={updateBoard} />
      <Turns currentTurn={currentTurn} />
      <WinnerModal winner={winner} handleResetBoard={handleResetBoard} />
    </main>
  );
}

export default App;
