"use client";
import React from "react";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";
import { Sun, Moon } from "react-feather";
import Cookies from "js-cookie";

type ColorThemeToggleProps = {
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
    <Button unstyled onClick={handleClick}>
      {theme === "light" ? <Sun /> : <Moon />}
      <VisuallyHidden>Swap color mode</VisuallyHidden>
    </Button>
  );
};

export default ColorThemeToggle;
