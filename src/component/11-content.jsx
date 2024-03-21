import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

const Content = () => {
  const { theme, isToggle } = useContext(ThemeContext);

  useEffect(() => {
    console.log(isToggle, "isToggle");
  }, [isToggle]);

  return (
    <div
      style={{
        background: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#333333" : "#ffffff",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h1>This is a {theme === "light" ? "light" : "dark"} theme</h1>
      {!isToggle && (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      )}
    </div>
  );
};

export default Content;
