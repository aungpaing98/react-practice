import React, { Component } from "react";
import axios from "axios";

import classes from "./Header.module.css";

export default class Header extends Component {
  handleSearch = () => {
    const { value } = this.searchField;

    this.props.updateState({ isFirst: false, isLoading: true });

    // // Use Fetch Method
    // fetch(`https://api.github.com/search/users?q=${value}`)
    //   .then((response) => response.json())
    //   .then((data) =>
    //     this.props.updateState({ isLoading: false, users: data.items })
    //   );

    axios.get(`https://api.github.com/searchsafdsa/users?q=${value}`).then(
      (response) => this.props.updateState({isLoading:false, users:response.data.items}),
      (error) => this.props.updateState({isLoading:false, error:error.message})
    );
  };
  render() {
    return (
      <div className={classes.title}>
        <h1>Search GitHub User</h1>
        <div className={classes.input_field}>
          <input ref={(c) => (this.searchField = c)} type="text" />
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}
