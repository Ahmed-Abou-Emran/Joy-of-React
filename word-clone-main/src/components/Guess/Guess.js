import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = `cell ${status ? status : ""}`;
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  console.log({ guessResult });
  return (
    <p className="guess">
      {range(0, WORD_LENGTH).map((colNo) => (
        <Cell
          key={colNo}
          letter={guessResult ? guessResult[colNo].letter : undefined}
          status={guessResult ? guessResult[colNo].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
