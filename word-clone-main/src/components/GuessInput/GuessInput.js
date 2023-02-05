import React from "react";
import { WORD_LENGTH } from "../../constants";

function GuessInput({ setGuesses, setStatus, statuses, answer }) {
  const [guess, setGuess] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert(`Guess must be ${WORD_LENGTH} letters long.`);
      return;
    }
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
    console.log({ guess });
    setGuess("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        value={guess}
        id="guess-input"
        type="text"
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letters word.`}
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
      />
    </form>
  );
}

export default GuessInput;
