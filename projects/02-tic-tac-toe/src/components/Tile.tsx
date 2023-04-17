import { useState } from "react";
import { BoardContent } from "../types";

type TileProps = {
  index: number;
  updateBoard: (tileIndex: number) => void;
  children: BoardContent | null;
};

export function Tile({ index, updateBoard, children }: TileProps) {
  const handleClick = () => {
    updateBoard(index);
  };

  const style: React.CSSProperties = {
    cursor: children ? "not-allowed" : "initial",
  };

  return (
    <div onClick={handleClick} style={style}>
      <span>{children}</span>
    </div>
  );
}
