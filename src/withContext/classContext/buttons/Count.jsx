import React, { Component } from "react";
import { MyContext } from "../context.api";

class Count extends Component {
  render() {
    return <p className="text">{this.context.state.count}</p>;
  }
}

Count.contextType = MyContext;
export default Count;
