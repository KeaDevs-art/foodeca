import React, { createContext, useState } from "react";

export const StartContext = createContext({
  start: false,
});

export const StartContextProvider = ({ children }) => {
  const [start, setStart] = useState(false);

  const value = {
    start,
    setStart,
  };

  return (
    <StartContext.Provider value={value}>{children}</StartContext.Provider>
  );
};
