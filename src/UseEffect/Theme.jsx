import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" || "red"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("red");
    } else {
      setTheme("light");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Theme Toggle</h2>
      <p>
        Current Theme: <strong>{theme}</strong>
      </p>
      <button
        onClick={toggleTheme}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
