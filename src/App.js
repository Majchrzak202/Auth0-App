import React from "react";
import "./App.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile/>
    </>
  );
};

export default App;
