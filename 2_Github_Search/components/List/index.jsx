import React, { Component } from "react";

import classes from "./List.module.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
    console.log("Error : ", error)
    return (
      <div className={classes.profiles}>
        {isFirst ? (
          <h2>Type in the Input field to search user</h2>
        ) : isLoading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2 style={{color:"red"}}>{error}</h2>
        ) : (
          users.map((user) => (
            <div className={classes.user} key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img
                  src={user.avatar_url}
                  alt="Profile"
                  style={{ height: "120px" }}
                />
              </a>
              <p>{user.login}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
