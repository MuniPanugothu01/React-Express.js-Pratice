import React from "react";
class Counter1 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    // we can bind the functions here beause of without binding the function it can't increase the count
    this.Increament = this.Increament.bind(this);
  }
  Increament() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increament}>Increment</button>
      </>
    );
  }
}
export default Counter1;
