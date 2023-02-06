import React from "react";

function Banner({ isSucess, numOfGuesses, answer }) {
  console.log(isSucess);
  const banner = isSucess ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
  return <>{banner}</>;
}

export default Banner;
