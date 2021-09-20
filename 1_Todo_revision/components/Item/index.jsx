import React, { Component } from "react";

import classes from "./Item.module.css";

export default class index extends Component {
  state = { mouse: false };

  checkHandler = (id) => {
    return (event) => {
      this.props.checkTodo(id, event.target.checked);
    };
  };

  handleHover = (status) => {
    return (event) => {
      this.setState({ mouse: status });
    };
  };

  deleteHandler = (id) => {
    return () => {
      if (window.confirm("Do you really wanna delet this todo?")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, todo, done } = this.props;
    const { mouse } = this.state;
    return (
      <div
        className={classes.itemContainer}
        onMouseEnter={this.handleHover(true)}
        onMouseLeave={this.handleHover(false)}
        style={{backgroundColor: mouse ? "rgba(136, 122, 182, 0.9)" : "#a08fd5" }}
      >
        <div
          className={classes.itemInfo}
        >
          <input
            type="checkbox"
            checked={done}
            onChange={this.checkHandler(id)}
          />
          <p>{todo}</p>
        </div>
        <button
          style={{
            display: mouse ? "block" : "none",
          }}
          onClick={this.deleteHandler(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
