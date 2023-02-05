import React from "react";
import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, WORD_LENGTH).map((colNo) => (
        <span key={colNo} className="cell">
          {guess && guess[colNo]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
