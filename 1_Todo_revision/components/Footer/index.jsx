import React, { Component } from "react";

import classes from "./Footer.module.css";

export default class Footer extends Component {
  checkHandler = (event) => {
    this.props.handleCheckAll(event.target.checked);
  };

  render() {
    const { todos, handleDeleteChecked } = this.props;
    const totalTodo = todos.length;
    const completedTodo = todos.reduce((p, c) => p + (c.done ? 1 : 0), 0);

    return (
      <div className={classes.checkContainer}>
        <div className={classes.checkInfo}>
          <input
            type="checkbox"
            checked={(totalTodo === completedTodo) & (totalTodo !== 0)}
            onChange={this.checkHandler}
          />
          <p>
            {" "}
            {completedTodo} / {totalTodo} (Completed / Total)
          </p>
        </div>
        <button onClick={handleDeleteChecked}>Delete Checked</button>
      </div>
    );
  }
}
