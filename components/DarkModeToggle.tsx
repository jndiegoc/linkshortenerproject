"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) {
        setIsDark(stored === "dark");
      } else {
        setIsDark(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border border-solid border-black/10 bg-white/60 dark:bg-black/40"
    >
      <span className="text-xs">{isDark ? "🌙" : "☀️"}</span>
      <span className="hidden md:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
