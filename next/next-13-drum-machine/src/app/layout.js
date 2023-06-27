import React from "react";

import Header from "../components/Header";
import { DrumProvider } from "../context/Drum.context";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <DrumProvider>
        <body>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </body>
      </DrumProvider>
    </html>
  );
}

export default RootLayout;
