import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [year, setYear] = useState(0);
  const [result, setResult] = useState("");

  function changeHandler(event) {
    setYear(event.target.value);
  }

  function clickHandler() {
    if (year % 400 === 0) {
      setResult("Your Birth year is a leap year");
      return;
    }

    if (year % 100 === 0) {
      setResult("Your Birth year is not a leap year");
      return;
    }

    if (year % 4 === 0) {
      setResult("Your Birth year is a leap year");
      return;
    }

    setResult("Your Birth year is not a leap year");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h1>Birthday Check</h1>
        </div>
      </div>

      <div
        className="body-container"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <input
          style={{ width: "40%", padding: "0.7rem" }}
          placeholder="enter birth year"
          onChange={changeHandler}
        ></input>

        <div style={{ margin: "1rem auto" }}>
          <button onClick={clickHandler}>Check for leap year</button>
        </div>
        <div>{result}</div>
      </div>
    </div>
  );
}
