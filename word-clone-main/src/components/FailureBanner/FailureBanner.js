import React from "react";
import Banner from "../Banner";

function FailureBanner({ answer }) {
  return (
    <Banner isSucess={false}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default FailureBanner;
