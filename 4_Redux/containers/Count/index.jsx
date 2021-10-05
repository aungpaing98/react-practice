import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/actions/count";
import { connect } from "react-redux";

class Count extends Component {
  increment = () => {
    const { value } = this.selectbtn;
    this.props.executeIncrement(value * 1);
  };

  decrement = () => {
    const { value } = this.selectbtn;
    this.props.executeDecrement(value * 1);
  };

  incrementOdd = () => {
    const { value } = this.selectbtn;
    if (this.props.count % 2 !== 0) {
      this.props.executeIncrement(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectbtn;
    setTimeout(() => {
      this.props.executeIncrement(value * 1);
    }, 500);
  };

  render() {
    return (
      <div className="container">
        <h1>Count Components</h1>
        <h4>Total Count : {this.props.count}</h4>
        <h4>
          Number of person :{" "}
          {this.props.users.length}
        </h4>
        <br />
        <select ref={(c) => (this.selectbtn = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment} className="btn btn-primary">
          +
        </button>
        &nbsp;
        <button onClick={this.decrement} className="btn btn-primary">
          -
        </button>
        &nbsp;
        <button onClick={this.incrementOdd} className="btn btn-primary">
          Add if Odd
        </button>
        &nbsp;
        <button onClick={this.incrementAsync} className="btn btn-primary">
          Add Async
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    count: state.totalCount,
    users: state.usersInfo,
  }),
  {
    executeIncrement: createIncrementAction,
    executeDecrement: createDecrementAction,
  }
)(Count);
