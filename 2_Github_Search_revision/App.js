import React, { Component } from "react";

import classes from "./App.module.css";

import Head from "./components/Head";
import List from "./components/List";

export default class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, error: "" };

  addUser = (searchResult) => {
    this.setState({ users: searchResult });
  };

  updateState = (newState) => {
    this.setState(newState)
  }

  render() {
    return (
      <div className={classes.mainContainer}>
        <Head addUser={this.addUser} updateState={this.updateState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
