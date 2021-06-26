import React from "react";
import { Context } from "../Context.api.jsx";
function Count() {
  const context = React.useContext(Context);

  return <p className="text">{context.count}</p>;
}

export default Count;
