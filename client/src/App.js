import React, { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";

// global CSS
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserName, setLoggedInUserName] = useState("");
  const [loggedInUserId, setLoggedInUserId] = useState("");

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
        <Main username={loggedInUserName} userId={loggedInUserId} />
      )}
    </div>
  );
};

export default App;
