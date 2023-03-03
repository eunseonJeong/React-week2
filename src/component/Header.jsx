import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        background: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1> 환영합니다 :-) </h1>
    </header>
  );
}

export default Header;
