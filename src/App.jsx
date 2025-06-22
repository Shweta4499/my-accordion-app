import { useState, useEffect } from "react";
import Accordion from "./components/accordian";
import "./components/accordian/style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <div className="theme-toggle">
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <h1 style={{ textAlign: "center" }}>React Accordion</h1>
      <Accordion singleSelection={true} />
    </div>
  );
}
