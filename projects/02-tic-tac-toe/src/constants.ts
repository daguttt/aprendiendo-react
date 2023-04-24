import { Turn } from "./types";

export const TURNS = {
  X: "x",
  O: "o",
} as const;

export const TURNS_LIST: Turn[] = [TURNS.X, TURNS.O];

export const WINNING_COMBINATIONS = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Crossed
  [0, 4, 8],
  [2, 4, 6],
];
