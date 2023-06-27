"use client";
import React from "react";

export const DrumContext = React.createContext();

export function DrumProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const toggleSoundEnabled = () => setSoundEnabled((prev) => !prev);

  return (
    <DrumContext.Provider value={{ soundEnabled, toggleSoundEnabled }}>
      {children}
    </DrumContext.Provider>
  );
}

export function useDrum() {
  const context = React.useContext(DrumContext);

  if (context === undefined) {
    throw new Error("useDrum must be used within a DrumProvider");
  }
  return context;
}
