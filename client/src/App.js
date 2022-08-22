import React, { useState } from "react";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Main />}
    </div>
  );
}

export default App;
