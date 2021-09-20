import React, { Component } from "react";

import classes from "./App.module.css";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, error: "" };

  updateState = (newStateObj) => {
    this.setState(newStateObj)
  }

  render() {
    // const { users, isFirst, isLoading, error } = this.state;
    return (
      <div className={classes.container}>
        <Header updateState={this.updateState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
