import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Stats.module.css";

const Stats = () => {
  return (
    <Card>
      <div>
        <h1 className={classes.title}>All Done!</h1>
        <button className={classes.stats}>View Stats</button>
      </div>
    </Card>
  );
};

export default Stats;
