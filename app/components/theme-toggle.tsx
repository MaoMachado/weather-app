"use client";

import { useTheme } from "../../src/context/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Cambiar tema"
      type="button"
      onClick={toggleTheme}
      className="absolute bottom-0 right-0 text-3xl cursor-pointer"
    >
      {theme === "dark" ? "☀️" : "🌚"}
    </button>
  );
}
