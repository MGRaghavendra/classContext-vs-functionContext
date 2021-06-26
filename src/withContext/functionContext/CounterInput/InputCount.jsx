import React from "react";
import { Context } from "../Context.api.jsx";
function InputCount() {
  const context = React.useContext(Context);
  return (
    <input
      type="text"
      value={context.input}
      onChange={(e) => context.handleInput(e)}
    />
  );
}

export default InputCount;
