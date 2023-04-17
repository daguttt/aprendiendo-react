import { TURNS } from "./constants";

export type BoardContent = ObjectValues<typeof TURNS>;
export type BoardState = {
  board: (BoardContent | null)[];
  playsCount: number;
  turn: BoardContent;
  winner: BoardContent | null | false;
};

type ObjectValues<T> = T[keyof T];
