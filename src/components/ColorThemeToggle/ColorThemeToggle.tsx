"use client";
import React from "react";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";
import { Sun, Moon } from "react-feather";
import Cookies from "js-cookie";

type ColorThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  initialTheme: string;
};

const ColorThemeToggle = ({
  initialTheme,
  ...props
}: ColorThemeToggleProps) => {
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
    <Button onClick={handleClick} unstyled {...props}>
      {theme === "light" ? (
        <Sun color="var(--color-text)" />
      ) : (
        <Moon color="var(--color-text)" />
      )}
      <VisuallyHidden>Swap color mode</VisuallyHidden>
    </Button>
  );
};

export default ColorThemeToggle;
