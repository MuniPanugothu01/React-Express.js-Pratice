import React from "react";

class Counter2 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.UpdateCount = this.UpdateCount.bind(this);
  }
  UpdateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.UpdateCount}>Increment</button>
      </>
    );
  }
}

export default Counter2;
