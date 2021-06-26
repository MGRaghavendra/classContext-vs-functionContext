import React from "react";
import { Context } from "../Context.api.jsx";
function AddamountBtn() {
  const context = React.useContext(Context);
  return (
    <button className="button" onClick={() => context.handleAmount()}>
      Add Amount
    </button>
  );
}

export default AddamountBtn;
