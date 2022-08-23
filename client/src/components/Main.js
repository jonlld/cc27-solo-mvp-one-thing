import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";

const greetings = ["Hi", "Go", "Yo", "Konnichiwa", "Hola"];
const randomIndex = Math.floor(Math.random() * 5);
const randomGreeting = greetings[randomIndex];

const Main = ({ username, userId }) => {
  const [taskIsActive, setTaskIsActive] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState();

  // Card is a flex container
  return (
    <Card>
      <div>
        <h1>One | Thing</h1>
        <p className={classes.greeting}>
          {randomGreeting}, {username}!
        </p>
      </div>
      <div>
        <form>
          <label>Choose your thing!</label>
          <input type="text" placeholder="Today I will focus on..."></input>
        </form>
      </div>
    </Card>
  );
};

export default Main;
