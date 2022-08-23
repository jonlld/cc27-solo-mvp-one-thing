import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";

const greetings = ["Hi", "Go", "Yo", "Konnichiwa", "Hola"];
const randomIndex = Math.floor(Math.random() * 5);
const randomGreeting = greetings[randomIndex];

const Main = ({ username, userId }) => {
  const [taskIsActive, setTaskIsActive] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState();

  // Refs
  const thingInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const thing = thingInputRef.current.value;

    const options = {
      method: "POST",
      body: JSON.stringify({ thing: thing }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch('http://localhost:3030/things/save', options);
    const data = await res.json();
    console.log(data);
  };

  // Card is a flex container
  return (
    <Card>
      <div>
        <h1 className={classes.title}>One | Thing</h1>
        <p className={classes.greeting}>
          {randomGreeting}, {username}!
        </p>
      </div>
      <div>
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <label htmlFor="thing">Choose your thing!</label>
          <input type="text" id="thing" placeholder="My focus is..." />
          <button type="submit" className={classes["check-in-button"]}>
            Done
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Main;
