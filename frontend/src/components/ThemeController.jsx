import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"; 

export default function ThemeController() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle text-xl"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <BsMoonStarsFill className="text-primary" />
      ) : (
        <BsSunFill className="text-warning" />
      )}
    </button>
  );
}