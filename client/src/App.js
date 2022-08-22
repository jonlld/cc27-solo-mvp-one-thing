import React, { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";

// global CSS
import "./index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Main />}
    </div>
  );
};

export default App;
