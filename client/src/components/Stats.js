import React, { useState } from "react";
import Card from "../UI/Card";
import Entry from "./Entry";

import classes from "./Stats.module.css";

const Stats = ({ viewStats, fetchEntries, entries }) => {
  if (!viewStats) {
    // ***** CHECKED-IN VIEW
    return (
      <Card>
        <div>
          <h1 className={classes.title}>All Done!</h1>
          <button className={classes.stats} onClick={fetchEntries}>
            View Stats
          </button>
        </div>
      </Card>
    );
  } else {
    // ***** ENTRIES VIEW
    const userGreeting = `Hey, ${entries[0].name}. Good job on this!`;

    return (
      <Card className={classes.flexColumn}>
        {/* TODO make header sticky */}
        <header className={classes.header}>
          <h1>{userGreeting}</h1>
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
