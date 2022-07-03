import React from "react";
import "./App.css";

const slotM = () =>{
  let x  = " 😄 "
}

const App = () => {
  return (
    <div>
      <div className="App">
        <h1 className="heading_style">
          {" "}
          Welcome to{" "}
          <span style={{ fontWeight: "bold" }}>🎰 Slot Machine game 🎰</span>
        </h1>
      </div>
      <div>
        <slotM/>
      </div>
    </div>
  );
};

export default App;
