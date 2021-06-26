import React from "react";
const Context = React.createContext();
function Provider(props) {
  const [input, setInput] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [count, setCount] = React.useState(amount);

  const handleAmount = () => {
    setAmount(input);
    setCount((count) => count + input);
  };

  const handleInput = (e) => {
    setInput(Number(e.target.value));
  };
  const handleIncrement = () => {
    setCount((count) => count + amount);
  };
  const handleDecrement = () => {
    setCount((count) => count - amount);
  };
  return (
    <Context.Provider
      value={{
        input,
        count,
        handleIncrement,
        handleDecrement,
        handleInput,
        handleAmount,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Provider;
export { Context };
