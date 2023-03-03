import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>좋은 하루 보내세요!</p>
    </div>
  );
}

export default Content;
