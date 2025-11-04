import { useState, useEffect } from "react";

export default function useThemeDetector() {
  const getCurrentTheme = () =>
    document.documentElement.getAttribute("data-theme") === "dark";

  const [isDark, setIsDark] = useState(getCurrentTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(getCurrentTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // sync once more after render, avoids white flash
    setIsDark(getCurrentTheme());

    return () => observer.disconnect();
  }, []);

  return isDark;
}