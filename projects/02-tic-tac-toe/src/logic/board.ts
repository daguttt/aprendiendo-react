import { TURNS, WINNING_COMBINATIONS } from "../constants";
import { BoardContent } from "../types";

export function getWinner({ board }: { board: (BoardContent | null)[] }) {
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
  boardToCheck: (BoardContent | null)[];
}) {
  if (playsCount < 4) return null;
  return getWinner({ board: boardToCheck });
}

export function getNewTurn({
  currentTurn,
}: {
  currentTurn: BoardContent;
}): BoardContent {
  return currentTurn === TURNS.X ? TURNS.O : TURNS.X;
}
