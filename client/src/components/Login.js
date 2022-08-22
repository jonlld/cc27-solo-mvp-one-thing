import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";

function Login(props) {
  // Refs
  const nameInputRef = useRef();
  const pswdInputRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();

    // using REFs to read the DOM directly
    const enteredName = nameInputRef.current.value;
    const enteredPswd = pswdInputRef.current.value;

    console.log(enteredName, enteredPswd);

    // set login to true and raise state
    props.onLogin(true);
  };

  return (
    <Card>
      <div className={classes["login-container"]}>
        <h1>One | Thing</h1>
        <form className={classes["form-control"]} onSubmit={loginHandler}>
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
        </form>
      </div>
    </Card>
  );
}

export default Login;
