import React, { Component } from "react";
import { MyContext } from "../context.api";
class DButton extends Component {
  render() {
    return (
      <button
        className="Decrement-button button"
        onClick={() => {
          this.context.handleDecrement();
        }}
      >
        -
      </button>
    );
  }
}

DButton.contextType = MyContext;

export default DButton;
