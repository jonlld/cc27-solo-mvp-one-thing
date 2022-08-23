import React, { useState, useRef, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";

const greetings = ["Hi", "Go", "Yo", "Konnichiwa", "Hola"];
const randomIndex = Math.floor(Math.random() * 5);
const randomGreeting = greetings[randomIndex];

const Main = ({ username, userId, onCheckedIn }) => {
  // Ref
  const thingInputRef = useRef();

  // Handle Check-in
  const submitHandler = async (e) => {
    e.preventDefault();

    const thing = thingInputRef.current.value;

    // if no entry, error
    // else, post to API and udpate state
    if (thing.length === 0) {
      alert("please input a thing to do");
    } else {
      const options = {
        method: "POST",
        body: JSON.stringify({ thing: thing, id: userId }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(
        "https://one-thing-server.herokuapp.com/things/save",
        options
      );
      const data = await res.json();

      // update checked-in state
      onCheckedIn(true);

      // clear inputs
      thingInputRef.current.value = "";
    }
  };

  // Card is a flex container
  return (
    <Card>
      <div>
        <h1 className={classes.title}>
          One <span className={classes.accent}>|</span> Thing
        </h1>
        <p className={classes.greeting}>
          {randomGreeting}, {username}!
        </p>
      </div>
      <div>
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <label htmlFor="thing" className={classes.choose}>
            Choose your thing!
          </label>
          <input
            type="text"
            id="thing"
            placeholder="Today I will..."
            ref={thingInputRef}
          />
          <button type="submit" className={classes["check-in-button"]}>
            Done
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Main;
