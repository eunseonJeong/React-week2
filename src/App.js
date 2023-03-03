import React, { useState } from "react";
import Timer from "./component/Timer";

function App() {
  const [show,setShow] = useState(false);
  return (
    <>
      {show && <Timer />}

      <button onClick={() => setShow(!show)} >titmer</button>
    </>
  );
}

export default App;
