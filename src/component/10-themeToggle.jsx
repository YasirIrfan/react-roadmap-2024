import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ThemeToggle = () => {
  const { setTheme, setIsToggle, isToggle } = useContext(ThemeContext);
  console.log("ThemeContext= ", isToggle);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setIsToggle(!isToggle);
  };

  return (
    <button
      style={{
        position: "absolute",
        cursor: "pointer",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
