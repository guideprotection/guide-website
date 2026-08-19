"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./icons";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("guide-theme", next);
    } catch {
      // localStorage may be unavailable (private mode, disabled storage); theme
      // still applies for the session via the DOM attribute.
    }
    setDark(next === "dark");
  }

  return (
    <button
      className="icon-btn"
      data-theme-toggle
      aria-label="Toggle color theme"
      aria-pressed={dark}
      onClick={toggle}
    >
      <IconMoon />
      <IconSun />
    </button>
  );
}
