import React from "react";
import Buttons from "./Buttons.jsx";
import CounterInput from "./CounterInput.jsx";
import Provider from "./Context.api.jsx";

function FunctionContextCounter() {
  return (
    <Provider>
      <div className="Counter">
        <p className="title">Function Context Component</p>
        <Buttons />
        <CounterInput />
      </div>
    </Provider>
  );
}

export default FunctionContextCounter;
