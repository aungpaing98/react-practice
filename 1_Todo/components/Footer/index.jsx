import React, { Component } from "react";
import classes from "./Footer.module.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handleDeleteAllCheck = () => {
    if (window.confirm("Do you wanna delete all the selected ? ")) {
      this.props.deleteAllCheckedTodo();
    }
  };

  render() {
    const { todos } = this.props;
    const totalTodo = todos.length;
    const checkedTodo = todos.reduce(
      (pre, currentTodo) => pre + (currentTodo.done ? 1 : 0),
      0
    );

    return (
      <div className={classes.footer}>
        <label>
          <input
            type="checkbox"
            className="checkAll"
            checked={totalTodo === checkedTodo && totalTodo !== 0}
            onChange={(event) => this.handleCheckAll(event)}
          />
          <p>
            Completed {checkedTodo} / Total {totalTodo}
          </p>
        </label>
        <button
          className={classes.delete_all}
          onClick={this.handleDeleteAllCheck}
        >
          Delete Selected
        </button>
      </div>
    );
  }
}
