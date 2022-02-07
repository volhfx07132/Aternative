import React, { Component, useState } from "react";
import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  {id: 'u1', name: "MAX"},
  {id: 'u2', name: "MIN"},
  {id: 'u3', name: "INDEX"},
]

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  toggleUsersHandler() {
    this.setState( (currentState) => {
      return {showUsers: !currentState.showUsers};
    })
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
       <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
             {this.state.showUsers ? "Hide" : "Show"} Users
          </button>
          {this.state.showUsers && usersList}
       </div>
    )
  }


}

export default Users;
