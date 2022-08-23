import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Stats from "./components/Stats";

// global CSS
import "./index.css";

const App = () => {
  // Login and Main State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

  // Stats State
  const [isCheckedIn, setIsCheckedIn] = useState(false); // show checked-in
  const [isViewStats, setIsViewStats] = useState(false); // show entries
  const [entries, setEntries] = useState([]);

  // Fetch entries when isViewStats updated
  const fetchEntriesHandler = async () => {
    // fetch data
    const res = await fetch(
      `https://one-thing-server.herokuapp.com/things/view/${loggedInUserId}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();

    // use data to set state
    // console.log("data received from server: ", data); // ok
    setEntries(data);

    setIsViewStats(true);
  };

  // Conditional Renders for Stats, or Login / Main
  if (isCheckedIn) {
    return (
      <Stats
        viewStats={isViewStats}
        fetchEntries={fetchEntriesHandler}
        entries={entries}
      />
    );
  } else {
    return (
      <div>
        {!isLoggedIn && (
          <Login
            onLogin={setIsLoggedIn}
            nameOnLogin={setLoggedInUserName}
            idOnLogin={setLoggedInUserId}
          />
        )}
        {isLoggedIn && (
          <Main
            username={loggedInUserName}
            userId={loggedInUserId}
            onCheckedIn={setIsCheckedIn}
          />
        )}
      </div>
    );
  }
};

export default App;
