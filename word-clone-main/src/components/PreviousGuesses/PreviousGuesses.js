import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "../../constants";
import Guess from "../Guess";

function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowNo) => (
        <Guess key={rowNo} guess={guesses[rowNo]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
