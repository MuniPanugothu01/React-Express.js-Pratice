import React from "react";

class Counter2 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.UpdateCount = this.UpdateCount.bind(this);
    this.Stop = this.Stop.bind(this); // Bind the Stop method
  }

  UpdateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  Stop() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.UpdateCount}>Increment</button>
        <button onClick={this.Stop}>Stop</button>
      </>
    );
  }
}

export default Counter2;
