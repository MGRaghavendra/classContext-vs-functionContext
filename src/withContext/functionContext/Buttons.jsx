import React from "react";
import IButton from "./buttons/IButton.jsx";
import DButton from "./buttons/DButton.jsx";
import Count from "./buttons/Count.jsx";

function Buttons() {
  return (
    <div className="Counter--buttons">
      <IButton />
      <Count />
      <DButton />
    </div>
  );
}

export default Buttons;
