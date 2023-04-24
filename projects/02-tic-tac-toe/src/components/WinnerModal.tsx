import { MouseEventHandler } from "react";
import { Winner } from "../types";

type WinnerModalProps = {
  winner: Winner;
  handleResetBoard: MouseEventHandler;
};
export function WinnerModal({ winner, handleResetBoard }: WinnerModalProps) {
  return (
    <>
      {winner && (
        <section className="winning-modal">
          <article>
            <p>
              Winner is: <b className="winner">{winner}</b>
            </p>
            <button onClick={handleResetBoard}>Reset game</button>
          </article>
        </section>
      )}
      {winner === false && (
        <section className="winning-modal">
          <article>
            <p>
              It is a <b>tie</b>
            </p>
            <button onClick={handleResetBoard}>Reset game</button>
          </article>
        </section>
      )}
    </>
  );
}
