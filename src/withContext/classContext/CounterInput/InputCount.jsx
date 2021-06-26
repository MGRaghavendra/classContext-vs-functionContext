import React, { Component } from "react";
import { MyContext } from "../context.api";
class InputCount extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          return (
            <input
              type="text"
              value={value.state.input}
              onChange={(e) => value.handleInput(e)}
            />
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default InputCount;
