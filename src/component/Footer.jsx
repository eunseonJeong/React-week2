import React from "react";

function Footer({ isDark, setIsDark }) {
  const toffleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <footer className="footer"
    style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
    }}>
      <button className="button" onClick={toffleTheme}>Dark Mode</button>
    </footer>
  );
};

export default Footer;
