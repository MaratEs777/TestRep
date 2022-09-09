import React, { useState } from "react";
import Animation from "./Animation";
import Vidjet from "./Vidjet";

import "./App.css";

function App() {
  const [click, setClick] = useState("1");
  const handler = () => {
    setClick("2");
    setTimeout(() => {
      setClick("3");
    }, 3000);
  };
  return (
    <div className="container">
      {click === "1" && (
        <button onClick={handler} className="btn">
          Ckick me!
        </button>
      )}

      {click === "2" && <Animation />}
      {click === "3" && <Vidjet />}
    </div>
  );
}

export default App;
