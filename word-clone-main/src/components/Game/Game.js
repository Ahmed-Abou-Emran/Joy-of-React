import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import SuccessBanner from "../SuccessBanner";
import FailureBanner from "../FailureBanner";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [isSucess, setIsSucess] = React.useState(false);

  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      <GuessInput
        isSucess={isSucess}
        setIsSucess={setIsSucess}
        answer={answer}
        setGuesses={setGuesses}
        guesses={guesses}
      />
      {isSucess && <SuccessBanner numOfGuesses={guesses.length} />}
      {guesses.length === 6 && <FailureBanner answer={answer} />}

      {/*       
      {(guesses.length === 6 || isSucess) && (
        <Banner
          isSucess={isSucess}
          answer={answer}
          numOfGuesses={guesses.length}
        />
      )} */}
    </>
  );
}

export default Game;
