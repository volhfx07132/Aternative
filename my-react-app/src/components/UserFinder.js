import React, { Fragment, useState, useEffect, Component } from "react";
import Users from "../components/Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "MAX" },
  { id: "u2", name: "MIN" },
  { id: "u3", name: "INDEX" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
      this.setState({searchTerm: event.target.value});
  }
  
  render() {
    return (
        <Fragment>
          <div className={classes.finder}>
            <input type="text" onChange={this.searchChangeHandler.bind(this)}></input>
          </div>
          <Users user={this.state.filteredUsers} />
        </Fragment>
      );
  }
}
export default UserFinder;
