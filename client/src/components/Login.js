import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Login.module.css";

function Login() {
  return (
    <Card>
      <div className={classes["login-container"]}>
        <h1>One | Thing</h1>
        <form className={classes["form-control"]}>
          <label>Name</label>
          <input type="text" placeholder="name"></input>
          <label>Password</label>
          <input type="password" placeholder="pswd"></input>
        </form>
      </div>
    </Card>
  );
}

export default Login;
