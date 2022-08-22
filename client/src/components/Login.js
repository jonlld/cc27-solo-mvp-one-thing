import React, { useRef } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";

function Login(props) {
  // Refs
  const nameInputRef = useRef();
  const pswdInputRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();

    // using REFs to read the DOM directly
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

    // backend check for credentials - hardcode local host for now
    // /users/save = backlog
    const res = await fetch("http://localhost:3030/users/login", options);
    const data = await res.json();

    // log data and update state based on server response!
    console.log(data);

    // props.onLogin(true);
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
