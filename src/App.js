import React from "react";
import "./App.css";

const SlotM = () =>{
  let x  = " 😄 "
  let y  = " 😄 "
  let z  = " 😄 "
  if((x===y) && (y===z)){
    return (
      <div>
        <div className="slot_inner">
          <h1>{x} {y} {z}</h1>
          <h1>This is matching</h1>
          <hr/>
        </div>
      </div>
    )
  }
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
        <SlotM/>
      </div>
    </div>
  );
};

export default App;
