import { TURNS, WINNING_COMBINATIONS } from "../constants";
import { BoardContent, BoardState, Turn } from "../types";

export function getWinner({ board }: { board: BoardContent }) {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export function checkWinner({
  playsCount,
  boardToCheck,
}: {
  playsCount: number;
  boardToCheck: BoardContent;
}) {
  if (playsCount < 4) return null;
  return getWinner({ board: boardToCheck });
}

export function getNewTurn({ currentTurn }: { currentTurn: Turn }): Turn {
  return currentTurn === TURNS.X ? TURNS.O : TURNS.X;
}

export const BOARD_TOKEN = "currentGame";

export function saveBoard({ boardToSave }: { boardToSave: BoardState }) {
  window.localStorage.setItem(BOARD_TOKEN, JSON.stringify(boardToSave));
}

export function getSavedBoard(): BoardState | null {
  const currentBoard = window.localStorage.getItem(BOARD_TOKEN);
  console.log({ currentBoard });
  return currentBoard ? (JSON.parse(currentBoard) as BoardState) : null;
}
