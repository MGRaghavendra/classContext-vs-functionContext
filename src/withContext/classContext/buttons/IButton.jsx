import React, { Component } from "react";
import { MyContext } from "../context.api";
class IButton extends Component {
  render() {
    const { handleIncrement } = this.context;
    return (
      <button
        className="Increment-button button"
        onClick={() => handleIncrement()}
      >
        +
      </button>
    );
  }
}

IButton.contextType = MyContext;

export default IButton;
