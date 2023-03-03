import React, { useState } from "react";
import "./App.css";
import Page from "./component/Page";


function App() {
  const [isDark, setIsDark] = useState(false);

  return (

      <Page isDark={isDark} setIsDark={setIsDark} />

  );
}

export default App;
