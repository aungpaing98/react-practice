import React, { Component } from "react";

import classes from "./Item.module.css";

export default class index extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className={classes.user}>
        <img
          style={{ height: "200px" }}
          src={user.avatar_url}
          alt="user profile"
        />
        <p>{user.login}</p>
      </div>
    );
  }
}
