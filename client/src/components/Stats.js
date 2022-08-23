import React, { useState } from "react";
import Card from "../UI/Card";
import Entry from "./Entry";

import classes from "./Stats.module.css";

const Stats = ({ viewStats, fetchEntries, entries, totalEntries, logout }) => {
  if (!viewStats) {
    // ***** CHECKED-IN VIEW *****
    return (
      <Card>
        <div>
          <h1 className={classes.title}>All | Done</h1>
          <button className={classes.stats} onClick={fetchEntries}>
            View Stats?
          </button>
        </div>
      </Card>
    );
  } else {
    // ***** ENTRIES VIEW *****
    return (
      <Card className={classes["card-adjust"]}>
        <header className={classes.header}>
          <h1>
            {entries[0].name}, you've rocked it <span>{totalEntries}</span>{" "}
            times. <span>That's awesome!</span>
          </h1>
          <a className={classes.logout} onClick={logout}>
            logout
          </a>
          <hr />
        </header>
        <div className={classes["entries-container"]}>
          {entries.map((entry) => {
            return <Entry entry={entry} />;
          })}
        </div>
      </Card>
    );
  }
};

export default Stats;
