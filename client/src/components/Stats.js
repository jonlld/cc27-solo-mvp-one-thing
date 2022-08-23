import React, { useState } from "react";
import Card from "../UI/Card";
import Entry from "./Entry";

import classes from "./Stats.module.css";

const Stats = ({ viewStats, setViewStats, fetchEntries, entries }) => {
  const viewStatsHandler = (e) => {
    setViewStats(true);
    // trigger fetch request handler in App
    fetchEntries();
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
        <div>
          {entries.map((entry) => {
            console.log(entry);
            const date = new Date(entry.date);
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            const dateString = `${day}/${month}/${year}`;
            return <div>{dateString}</div>;
          })}
        </div>
      </Card>
    );
  }
};

export default Stats;
