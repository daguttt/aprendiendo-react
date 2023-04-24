import { BoardContent } from "../types";
import { Tile } from "./Tile";

type BoardProps = {
  board: BoardContent;
  updateBoard: (tileIndex: number) => void;
};

export function Board({ board, updateBoard }: BoardProps) {
  return (
    <article className="board">
      {board.map((tile, i) => (
        <Tile key={i} index={i} updateBoard={updateBoard}>
          {tile}
        </Tile>
      ))}
    </article>
  );
}
