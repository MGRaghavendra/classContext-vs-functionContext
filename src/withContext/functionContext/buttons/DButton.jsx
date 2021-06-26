import React from "react";
import { Context } from "../Context.api.jsx";
function DButton() {
  const context = React.useContext(Context);
  return (
    <button
      className="Decrement-button button"
      onClick={() => context.handleDecrement()}
    >
      -
    </button>
  );
}

export default DButton;
