import React, { useState, useRef } from "react";
import Card from "../UI/Card";

import { API_URL } from "../config";

import classes from "./Login.module.css";

const Login = (props) => {
  // check errors
  const [isError, setIsError] = useState(false);

  // Refs
  const nameInputRef = useRef();
  const pswdInputRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();

    // Read DOM
    const enteredName = nameInputRef.current.value;
    const enteredPswd = pswdInputRef.current.value;
    const formData = { name: enteredName, pswd: enteredPswd };

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // backend check for credentials
    const res = await fetch(`${API_URL}/users/login`, options);
    const data = await res.json();

    // log data and update state based on server response!
    if (data === "Invalid credentials") {
      setIsError(true);
      nameInputRef.current.value = "";
      pswdInputRef.current.value = "";
    } else {
      // update state to set user and change status
      console.log("data", data);
      props.idOnLogin(data.id);
      props.nameOnLogin(data.name);
      props.onLogin(true);
    }
  };

  return (
    <Card>
      <h1 className={classes.title}>
        One <span className={classes.accent}>|</span> Thing
      </h1>
      <form
        className={`${classes["form-control"]} ${isError && classes.error}`}
        onSubmit={loginHandler}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          ref={nameInputRef}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="pswd"
          ref={pswdInputRef}
        ></input>
        <button type="submit">Submit</button>
        {isError && (
          <p className={classes["error-msg"]}>
            Login incorrect, please try again!
          </p>
        )}
      </form>
    </Card>
  );
};

export default Login;
