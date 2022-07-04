import React from "react";
import "./App.css";

const SlotM = (props) => {
  // let x = " 😄 ";
  // let y = " 😄 ";
  // let z = " 🎅 ";
  if (props.x === props.y && props.y === props.z) {
    return (
      <div>
        <div className="slot_inner">
          <h1>
            {props}
          </h1>
          <h1>This is matching</h1>
          <hr />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="slot_inner">
          <h1>
            {props}
          </h1>
          <h1>This is Not matching</h1>
          <hr />
        </div>
      </div>
    );
  }
};

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
        <SlotM x = ' 😄 ' y = ' 😄 ' z = ' 😄 ' />
        <SlotM />
        <SlotM />
      </div>
    </div>
  );
};
export default App;
