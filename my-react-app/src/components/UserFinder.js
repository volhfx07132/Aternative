import React, { Fragment, useState, useEffect } from "react";
import Users from "../components/Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "MAX" },
  { id: "u2", name: "MIN" },
  { id: "u3", name: "INDEX" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUser] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUser(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
      <Fragment>
        <div className={classes.finder}>
          <input type="text" onChange={searchChangeHandler}></input>
        </div>
        <Users user={filteredUsers}/>
      </Fragment>
  )
};

export default UserFinder;
