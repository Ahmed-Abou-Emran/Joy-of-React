import React from "react";
import Banner from "../Banner";

function SuccessBanner({ numOfGuesses }) {
  return (
    <Banner isSucess={true}>
      {" "}
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses === 1 ? "1 guess" : numOfGuesses + " guesses"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default SuccessBanner;
