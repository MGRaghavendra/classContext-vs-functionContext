import React, { Component } from "react";
import IButton from "./buttons/IButton.jsx";
import Count from "./buttons/Count.jsx";
import DButton from "./buttons/DButton.jsx";
class Buttons extends Component {
  render() {
    return (
      <div className="Counter--buttons">
        <IButton />
        <Count />
        <DButton />
      </div>
    );
  }
}

export default Buttons;
