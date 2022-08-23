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
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isViewStats, setIsViewStats] = useState(false);
  const [entries, setEntries] = useState([]);

  // Fetch entries when isViewStats updated
  useEffect(() => {
    if (isViewStats) {
      // fetch data
      const data = fetch(
        `http://localhost:3030/things/view/${loggedInUserId}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());

      // use data to set state
      setEntries(data);
    }
  }, [isViewStats]);

  // Conditional Renders for Stats, or Login / Main
  if (isCheckedIn) {
    return <Stats viewStats={isViewStats} onViewStats={setIsViewStats} />;
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
