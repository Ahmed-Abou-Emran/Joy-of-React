import React from "react";

import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main className="screen-saver-wrapper">
      <h1>Screen Saver</h1>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/red">red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/green">green</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/yellow">yellow</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
