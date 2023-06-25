import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  console.log("Page rendered on Client");
  return (
    <html lang="en">
      <body>
        {children}
        <footer>page rendered on {new Date().toLocaleString()}</footer>
        <footer>page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
