import { TURNS_LIST } from "../constants";
import { Turn } from "../types";

type TurnsProps = {
  currentTurn: Turn;
};

export function Turns({ currentTurn }: TurnsProps) {
  return (
    <article className="turns">
      {TURNS_LIST.map((turn) => {
        const classes = turn === currentTurn ? "tile current" : "tile";
        return (
          <div className={classes} key={turn}>
            <span>{turn}</span>
          </div>
        );
      })}
    </article>
  );
}
