import React from "react";
import { WORD_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessInput({ setGuesses, guesses, isSucess, setIsSucess, answer }) {
  const [guess, setGuess] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert(`Guess must be ${WORD_LENGTH} letters long.`);
      return;
    }
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
    console.log({ guess });
    const guessResult = checkGuess(guess, answer).every(
      (element) => element.status === "correct"
    );
    console.log(guessResult);
    if (guessResult) setIsSucess(true);
    setGuess("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        onChange={(event) => {
          const value = event.target.value.toUpperCase();
          setGuess(value);
        }}
        value={guess}
        id="guess-input"
        type="text"
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letters word.`}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        disabled={isSucess || guesses.length === 6}
      />
    </form>
  );
}

export default GuessInput;
