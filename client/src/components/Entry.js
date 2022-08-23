import React, { useState } from "react";

import classes from "./Entry.module.css";

const Entry = ({ entry }) => {
  const { date, item, name } = entry;

  return (
    <div className={classes["entry-container"]}>
      <div className={classes["item-container"]}>
        <h3>{item}</h3>
      </div>
      <div className={classes["date-container"]}>
        <h3>{date}</h3>
      </div>
    </div>
  );
};

export default Entry;
