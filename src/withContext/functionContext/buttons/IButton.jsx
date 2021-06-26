import React from "react";
import { Context } from "../Context.api";
function IButton() {
  const context = React.useContext(Context);
  return (
    <button
      className="Increment-button button"
      onClick={() => context.handleIncrement()}
    >
      +
    </button>
  );
}

export default IButton;
