import React from "react";
import styled from "styled-components";
import "./App.css";

export class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: "",
    operador: ""
  };

  handleChange1 = (e) => {
    this.setState({ n1: Number(e.target.value) });
  };

  handleChange2 = (e) => {
    this.setState({ n2: Number(e.target.value) });
  };

  div = () => {
    this.setState({ result: this.state.n1 / this.state.n2, operador: "/" });
  };

  mult = () => {
    this.setState({ res: this.state.n1 * this.state.n2, operador: "x" });
  };

  subtrair = () => {
    this.setState({ result: this.state.n1 - this.state.n2, operador: "-" });
  };

  somar = () => {
    this.setState({ result: this.state.n1 + this.state.n2, operador: "+" });
  };

  clear = () => {
    this.setState({ n1: "", n2: "", result: "", operador: "" });
  };

  render() {
    return (
      <div className="calc">
        <h1>Calc App</h1>
        <input
          value={this.state.n1}
          type="number"
          onChange={this.handleChange1}
        />
        <input
          value={this.state.n2}
          type="number"
          onChange={this.handleChange2}
        />
        <button onClick={this.div}>/</button>
        <button onClick={this.mult}>x</button>
        <button onClick={this.somar}>+</button>
        <button onClick={this.subtrair}>-</button>
        <button onClick={this.clear}>C</button>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
