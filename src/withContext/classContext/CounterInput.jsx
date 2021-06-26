import React, { Component } from "react";
import InputCount from "./CounterInput/InputCount.jsx";
import AddamountBtn from "./CounterInput/AddamountBtn.jsx";
export class CounterInput extends Component {
  render() {
    return (
      <div className="Counter--input">
        <InputCount />
        <AddamountBtn />
      </div>
    );
  }
}

export default CounterInput;
