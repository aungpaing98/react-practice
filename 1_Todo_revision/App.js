import React, { Component } from "react";

import classes from "./App.module.css";
import Head from "./components/Head";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  // Define component level state
  state = {
    todos: [
      { id: "001", todo: "get up", done: false },
      { id: "002", todo: "wash face", done: true },
      { id: "003", todo: "go to school", done: false },
    ],
  };

  addNewTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  checkTodo = (id, checked) => {
    const { todos } = this.state;
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: checked };
      }
      return todo;
    });
    this.setState({ todos: newTodo });
  };

  deleteTodo = (id) => {
      const {todos} = this.state;
      const newTodo = todos.filter(todo=> todo.id !== id)
      this.setState({todos:newTodo})
  }

  handleCheckAll = (checked) => {
      const {todos} = this.state
      const newTodos = todos.map(todo=>({...todo, done:checked}))
      this.setState({todos:newTodos})
  }

  handleDeleteChecked = () => {
      const {todos} = this.state
      const numberChecked = todos.reduce((p, c)=>p+(c.done?1:0), 0)
      if (numberChecked !== 0){
          if (window.confirm("Do you really want to delete all the checked todos?")){
              const newTodos = todos.filter(todo=>todo.done!==true)          
              this.setState({todos:newTodos})
          }
      }
      else{alert("Check the completed todos")}
  }

  render() {
      const {todos} = this.state
        return (
        <div className={classes.mainContainer}>
            <Head addNewTodo={this.addNewTodo} />
            <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} handleCheckAll={this.handleCheckAll} handleDeleteChecked={this.handleDeleteChecked}/>
        </div>
    );
  }
}
