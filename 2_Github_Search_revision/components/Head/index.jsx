import React, { Component } from "react";
import axios from "axios";

import classes from "./Head.module.css";

export default class Head extends Component {
  handleSearch =  () => {
    const { value } = this.inputUserName;
    const { updateState } = this.props;
    if (value) {
      // Search User
      updateState({ isFirst: false, isLoading: true });
      axios.get(`https://api.github.com/searchdsd/users?q=${value}`).then(
        (response) => {
          this.props.addUser(response.data.items);
            updateState({ isLoading: false });
        },
        (error) => updateState({isLoading:false, error:error.message})
      );

      // try {
      //   updateState({ isFirst: false, isLoading: true });
      //   const response = await fetch(
      //     `https://api.github.com/search/users?q=${value}`
      //   );
      //   const data = await response.json();
      //   console.log(data);
      //   this.props.addUser(data.items);
      //   updateState({ isLoading: false });
      // } catch (error) {
      //   updateState({ isLoading: false, error: error.message });
      // }

      // fetch(`https://api.github.com/search/users?q=${value}`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.props.addUser(data.items);
      //     updateState({ isLoading: false });
      //   })

      // Output result to app state
      this.inputUserName.value = "";
    }
  };

  render() {
    return (
      <div className={classes.header}>
        <h1>Github User Search</h1>
        <div className={classes.input_field}>
          <input
            type="text"
            placeholder="  Type in Github user name"
            ref={(c) => (this.inputUserName = c)}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}
