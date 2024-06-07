import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from './components/navbar';
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
    </div>
  );
}

export default App;
