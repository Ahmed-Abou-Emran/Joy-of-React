import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function PreviousGuesses({ guesses, statuses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowNo) => (
        <Guess
          answer={answer}
          status={statuses[rowNo] ? statuses[rowNo] : undefined}
          key={rowNo}
          guess={guesses[rowNo]}
        />
      ))}
    </div>
  );
}

export default PreviousGuesses;
