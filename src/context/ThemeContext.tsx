"use client";

import React from "react";

type ThemeContextTypes = {
  initialTheme: string;
};

const ThemeContext = React.createContext<ThemeContextTypes | undefined>(
  undefined
);

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: string;
}) => {
  return (
    <ThemeContext.Provider value={{ initialTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};
