import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };
  return (
    <form onSubmit={onSubmitHandler} className="guess-input-wrapper">
      <label forHtml="guess-input">Enter guess:</label>
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
