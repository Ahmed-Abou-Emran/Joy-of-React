import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [statuses, setStatus] = React.useState("playing");
  return (
    <>
      <PreviousGuesses answer={answer} statuses={statuses} guesses={guesses} />
      <GuessInput
        answer={answer}
        setStatus={setStatus}
        statuses={statuses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default Game;
