import React, { Component } from "react";

import classes from "./App.module.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  // Initialize State
  state = {
    todos: [
      { id: 1, name: "get up", done: false },
      { id: 2, name: "wash Face", done: true },
      { id: 3, name: "Go to school", done: false },
      { id: 4, name: "Go to bed", done: false },
    ],
  };

  // Add Newtodo, used in Header Component
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodo = [todoObj, ...todos];
    this.setState({ todos: newTodo });
  };

  // Handle check todo item
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodo = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({todos:newTodo})
  };

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodo = todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({todos:newTodo})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodo = todos.map(todo => {
      return {...todo, done}
    })
    this.setState({todos:newTodo})
  }

  deleteAllCheckedTodo = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => !todo.done)
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state;
    return (
      <div className={classes.container}>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllCheckedTodo={this.deleteAllCheckedTodo}/>
      </div>
    );
  }
}
