import React from "react";

const SlotM = (props) => {
    // let x = " 😄 ";
    // let y = " 😄 ";
    // let z = " 🎅 ";
    
    //object destructuring first way
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    //object destructuring 2nd way
    let {x,y,z} = props ;
    if (x === y && y === z) {
      return (
        <div>
          <div className="slot_inner">
            <h1>
              {x}
              {y}
              {z}
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
              {x}
              {y}
              {z}
            </h1>
            <h1>This is Not matching</h1>
            <hr />
          </div>
        </div>
      );
    }
  };
  export default SlotM;