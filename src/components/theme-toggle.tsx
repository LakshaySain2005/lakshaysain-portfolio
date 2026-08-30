import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = document.documentElement.dataset["theme"];
    const nextTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : "light";

    document.documentElement.dataset["theme"] = nextTheme;
    setTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset["theme"] = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span aria-hidden="true" className="theme-toggle__icon">
        {theme === "light" ? "☼" : "◐"}
      </span>
      <span aria-hidden="true" className="theme-toggle__knob" />
    </button>
  );
}