import React from "react";

const MyContext = React.createContext();
class MyProvider extends React.Component {
  state = {
    count: 0,
    amout: 1,
    input: 0,
  };
  handleAmount = () => {
    this.setState((state) => {
      return {
        ...state,
        amount: state.input,
        count: state.count + state.input,
      };
    });
  };
  handleInput = (e) => {
    this.setState((state) => {
      return { ...state, input: Number(e.target.value) };
    });
  };
  handleIncrement = () => {
    this.setState((state) => {
      return { ...state, count: state.count + state.amount };
    });
  };
  handleDecrement = () => {
    this.setState((state) => {
      return { ...state, count: state.count - state.amount };
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleAmount: this.handleAmount,
          handleDecrement: this.handleDecrement,
          handleIncrement: this.handleIncrement,
          handleInput: this.handleInput,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext };
export default MyProvider;
