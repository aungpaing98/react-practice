import React, { Component } from "react";
import {nanoid} from 'nanoid';
import classes from './Header.module.css';

export default class Header extends Component {
  handleKeyUp=(event)=>{
    const {keyCode, target} = event
    // Enter to add new todo
    if (keyCode !== 13) return
    // Prepare new Todo
    if (target.value.trim()==="")return

    const todoObj = {id:nanoid(), name:target.value, done:false}
    this.props.addTodo(todoObj)

    target.value = ''
  }
  render() {
    return (
      <>
        <div className="title">
          <h1>Todo Lists</h1>
        </div>
        <div className={classes.newTodo}>
          <input
            className={classes.input_field}
            type="text"
            placeholder="Press <Enter> to input new todo"
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </>
    );
  }
}
