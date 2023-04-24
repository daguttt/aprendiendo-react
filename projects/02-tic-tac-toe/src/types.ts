import { TURNS } from "./constants";

export type Turn = ObjectValues<typeof TURNS>;
export type BoardElement = Turn | null;
export type BoardContent = BoardElement[];
export type Winner = BoardElement | false;
export type BoardState = {
  board: BoardContent;
  playsCount: number;
  currentTurn: Turn;
  winner: Winner;
};

type ObjectValues<T> = T[keyof T];
