import React, { Component } from "react";

import { createAddPersonAction } from "../../redux/actions/person";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

class Person extends Component {
  addNewUser = () => {
    const userName = this.nameNode.value;
    const jobName = this.jobNode.value;
    const newObj = { id: nanoid(), name: userName, job: jobName };
    this.props.addNewPerson(newObj);
    this.nameNode.value = "";
    this.jobNode.value = "";
  };

  render() {
    return (
      <div className="container">
        <h1>Person Component</h1>
        <h4>Total Count : {this.props.count}</h4>
        <div className="input_field">
          <input
            ref={(c) => (this.nameNode = c)}
            type="text"
            placeholder="Enter New Name"
          />
          <input
            ref={(c) => (this.jobNode = c)}
            type="text"
            placeholder="Enter New Job"
          />
          <button onClick={this.addNewUser}>Add New User</button>
        </div>
        <br />
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              Name : {user.name} | Job : {user.job}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ users: state.usersInfo, count: state.totalCount }),
  {
    addNewPerson: createAddPersonAction,
  }
)(Person);
