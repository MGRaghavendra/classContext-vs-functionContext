import React, { Component } from "react";
import Buttons from "./Buttons.jsx";
import CounterInput from "./CounterInput";
import MyProvider from "./context.api.jsx";
class ClassContextCounter extends Component {
  render() {
    return (
      <MyProvider>
        <div className="Counter">
          <p className="title">Class Context Component</p>
          <Buttons />
          <CounterInput />
        </div>
      </MyProvider>
    );
  }
}

export default ClassContextCounter;
