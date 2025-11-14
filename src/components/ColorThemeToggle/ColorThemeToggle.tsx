"use client";
import React from "react";
import Cookies from "js-cookie";
import Switch from "../Switch";
import { useTheme } from "@/context/ThemeContext";

const ColorThemeToggle = () => {
  const { initialTheme } = useTheme();

  const [theme, setTheme] = React.useState(() => {
    return Cookies.get("color-theme") || initialTheme;
  });

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
