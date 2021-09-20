import React, { Component } from "react";

import classes from "./Item.module.css";

export default class Item extends Component {
  state = { mouse: false }; // Mouse hover effect

  // CallBack function for mouse hover
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  // Callback function for todo check
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  deleteHandler = (id) => {
    return (event) => {
      if (window.confirm("Do you really wanna delete this todo?")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <div className={classes.list_item}>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <div>{name}</div>
        </div>
        <button
          onClick={this.deleteHandler(id)}
          className={classes.delete_btn}
          style={{ display: mouse ? "block" : "None" }}
        >
          Delete
        </button>
      </li>
    );
  }
}
