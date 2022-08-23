import React, { useState } from "react";
import Card from "../UI/Card";
import Entry from "./Entry";

import classes from "./Stats.module.css";

const Stats = ({ viewStats, fetchEntries, entries }) => {
  // const userGreeting = `Hey, ${entries[0].name}. Good job on this!`;

  if (!viewStats) {
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
    return (
      <Card className={classes.flexColumn}>
        {/* TODO make header sticky */}
        <header>
          {/* <h1 className={classes.header}>{userGreeting}</h1> */}
          <hr className={classes.separator} />
        </header>
        <div>
          {entries.map((entry) => {
            return <Entry entry={entry} />;
          })}
        </div>
      </Card>
    );
  }
};

export default Stats;
