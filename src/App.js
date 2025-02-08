import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [heading, setHeading] = useState("Hello Nithin");

  function handleClick() {
    setHeading("Have A Nice Day");
  }

  return (
    <div className="container">
      <h1 className="heading">{heading}</h1>
      <button className="submit-button" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
