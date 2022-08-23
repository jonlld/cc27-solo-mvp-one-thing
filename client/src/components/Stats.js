import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Stats.module.css";

const Stats = ({ viewStats, onViewStats }) => {
  const viewStatsHandler = (e) => {
    onViewStats(true);
  };

  if (!viewStats) {
    return (
      <Card>
        <div>
          <h1 className={classes.title}>All Done!</h1>
          <button className={classes.stats} onClick={viewStatsHandler}>
            View Stats
          </button>
        </div>
      </Card>
    );
  } else {
    return (
      <Card>
        <h1>Test</h1>
      </Card>
    );
  }
};

export default Stats;
