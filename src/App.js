import React from "react";
import "./App.css";
import SlotM from "./SlotMachine";

const App = () => {
  return (
    <div className="main-div">
      <div className="App">
        <h1 className="heading_style">
          Welcome to
          <span style={{ fontWeight: "bold" }}>🎰 Slot Machine game 🎰</span>
        </h1>
      </div>
      <div className="slotmachine">
        <SlotM x=" 😄 " y=" 😄 " z=" 😄 " />
        <SlotM x=" 🍎 " y=" 🍌 " z=" 🍎 " />
        <SlotM x=" 😄 " y=" 🍔 " z=" 😠 " />
      </div>
    </div>
  );
};
export default App;
