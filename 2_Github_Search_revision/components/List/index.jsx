import React, { Component } from "react";

import classes from "./List.module.css";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
    return (
      <div className={classes.users}>
        {isFirst ? (
          <h2>Type in to find User.</h2>
        ) : isLoading ? (
          <h2>Loading ...</h2>
        ) : error!=="" ? (
          <h2
            style={{
              padding: "20px",
              width: "80%",
              borderRadius: "20px",
              backgroundColor: "#887ab6",
              color: "#343434",
            }}
          >
            {error}
          </h2>
        ) : users.length === 0 ? (
          <h2
            style={{
              padding: "20px",
              width: "80%",
              borderRadius: "20px",
              backgroundColor: "#887ab6",
              color: "#343434",
            }}
          >
            No User Found
          </h2>
        ) : (
          users.map((user) => <Item key={user.id} user={user} />)
        )}
      </div>
    );
  }
}
