import { TURNS } from "./constants";

export type BoardContent = ObjectValues<typeof TURNS>;
export type Winner = BoardContent | null | false;
export type BoardState = {
  board: (BoardContent | null)[];
  playsCount: number;
  currentTurn: BoardContent;
  winner: Winner;
};

type ObjectValues<T> = T[keyof T];
