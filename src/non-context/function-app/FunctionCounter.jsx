import React from "react";

function Counter() {
  const [input, setInput] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [count, setCount] = React.useState(amount);
  return (
    <div className="Counter">
      <p className="title">Function Component</p>
      <div className="Counter--buttons">
        <button
          className="Increment-button button"
          onClick={() => setCount((count) => count + amount)}
        >
          +
        </button>

        <p className="text">{count}</p>
        <button
          className="Decrement-button button"
          onClick={() => setCount((count) => count - amount)}
        >
          -
        </button>
      </div>
      <div className="Counter--input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />{" "}
        <button
          className="button"
          onClick={() => {
            setAmount(Number(input));
            setCount((count) => count + Number(input));
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;
