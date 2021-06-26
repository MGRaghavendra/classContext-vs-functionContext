import React, { Component } from "react";
import { MyContext } from "../context.api";
class AddamountBtn extends Component {
  static contextType = MyContext;
  render() {
    return (
      <button className="button" onClick={() => this.context.handleAmount()}>
        Add Amount
      </button>
    );
  }
}

export default AddamountBtn;
