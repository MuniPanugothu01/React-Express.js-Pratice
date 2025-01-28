import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem("theme", theme); 
  }, [theme]); 


  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
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
