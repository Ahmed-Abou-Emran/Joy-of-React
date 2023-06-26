"use client";
import React from "react";

export default function CodeSnippetReveal({ children }) {
  const [isRevealed, setIsRevealed] = React.useState(false);
  console.log(children);
  return (
    <>
      {isRevealed ? (
        <> {children}</>
      ) : (
        <div className="reveal">
          <button onClick={() => setIsRevealed(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
}
