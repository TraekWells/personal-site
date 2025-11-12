"use client";
import React from "react";
import Cookies from "js-cookie";
import Switch from "../Switch";

type ColorThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  initialTheme: string;
};

const ColorThemeToggle = ({ initialTheme }: ColorThemeToggleProps) => {
  const [theme, setTheme] = React.useState(initialTheme);

  const handleClick = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    Cookies.set("color-theme", nextTheme, {
      expires: 500,
    });

    const root = document.documentElement;
    root.setAttribute("data-theme", nextTheme);
  };

  return (
    <Switch
      label="Dark Mode"
      checked={theme === "dark"}
      setChecked={handleClick}
    />
  );
};

export default ColorThemeToggle;
