import React, { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";
import Stats from "./components/Stats";

// global CSS
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isViewStats, setIsViewStats] = useState(false);

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
