import React from "react";
import InputCount from "./CounterInput/InputCount.jsx";
import AddamountBtn from "./CounterInput/AddamountBtn.jsx";
function CounterInput() {
  return (
    <div className="Counter--input">
      <InputCount />
      <AddamountBtn />
    </div>
  );
}

export default CounterInput;
