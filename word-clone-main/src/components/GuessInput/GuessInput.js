import React from "react";

function GuessInput({ setGuesses }) {
  const [guess, setGuess] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Guess must be 5 letters long.");
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
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
