import { useState } from "react";
import { Turn } from "../types";

type TileProps = {
  index: number;
  updateBoard: (tileIndex: number) => void;
  children: Turn | null;
};

export function Tile({ index, updateBoard, children }: TileProps) {
  const handleClick = () => {
    updateBoard(index);
  };

  const style: React.CSSProperties = {
    cursor: children ? "not-allowed" : "initial",
  };

  return (
    <div className="tile" onClick={handleClick} style={style}>
      <span>{children}</span>
    </div>
  );
}
