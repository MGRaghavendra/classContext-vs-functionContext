import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
    amount: 0,
    input: 0,
  };

  handleIncrement() {
    this.setState((state) => {
      return { ...state, count: state.count + state.amount };
    });
  }

  handleDecrement() {
    this.setState((state) => {
      return { ...state, count: state.count - state.amount };
    });
  }

  handleInput(e) {
    this.setState((state) => {
      return { ...state, input: Number(e.target.value) };
    });
  }

  addAmount() {
    this.setState((state) => {
      return {
        ...state,
        amount: state.input,
        count: state.count + state.input,
      };
    });
  }

  render() {
    return (
      <div className="Counter">
        <p className="title">Class Component</p>
        <div className="Counter--buttons">
          <button
            className="Increment-button button"
            onClick={() => {
              this.handleIncrement();
            }}
          >
            +
          </button>
          <p className="text">{this.state.count}</p>
          <button
            className="Decrement-button button"
            onClick={() => {
              this.handleDecrement();
            }}
          >
            -
          </button>
        </div>
        <div className="Counter--input">
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.handleInput(e)}
          />{" "}
          <button
            className="button"
            onClick={() => {
              this.addAmount();
            }}
          >
            Add Amount
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
