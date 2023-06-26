"use client";
import React from "react";

export default function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);
  const clickHandler = () => {
    setIsCensored((prev) => !prev);
  };
  return (
    <button
      onClick={clickHandler}
      className={isCensored ? "censored" : undefined}
    >
      {children}
    </button>
  );
}
