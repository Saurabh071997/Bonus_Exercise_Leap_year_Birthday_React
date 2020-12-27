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
      setResult("Your Birth year is a leap year 🥳🎉");
      return;
    }

    if (year % 100 === 0) {
      setResult("Your Birth year is not a leap year 🎁🎁🎁");
      return;
    }

    if (year % 4 === 0) {
      setResult("Your Birth year is a leap year 🥳🎉");
      return;
    }

    setResult("Your Birth year is not a leap year 🎁🎁🎁");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="navigation">
          <h1 style={{ fontSize: "3rem" }}> Birthday Check</h1>
          <span role="img" aria-label="party" style={{ fontSize: "2rem" }}>
            🎉🎉
          </span>
        </div>
      </div>

      <div className="container">
        <input
          style={{
            width: "50%",
            margin: "0.5rem auto",
            borderRadius: "0.5rem",
            border: "1px solof gray",
            padding: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            background: "transparent",
            color: "#F3F4F6"
          }}
          placeholder="Enter Birth year"
          onChange={changeHandler}
        ></input>

        <button
          style={{
            // width:"40%",
            margin: "0.5rem auto",
            fontSize: "1.25rem",
            fontWeight: "bold",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.5rem",
            boxShadow: "5px 5px 10px gray",
            background: "transparent",
            color: "#F3F4F6"
          }}
          onClick={clickHandler}
        >
          {" "}
          CHECK LEAP YEAR 📅📅
        </button>

        <div
          style={{
            margin: "1rem auto",
            fontSize: "2rem",
            fontWeight: "bold",
            maxWidth: "300px"
          }}
        >
          {result}
        </div>
      </div>
    </div>
  );
}

