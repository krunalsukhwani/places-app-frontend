import React from "react";

import "./Users.css";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            "id" : "u1",
            "name" : "Steven",
            "places" : 4,
            "image" : "https://i.imgur.com/OB0y6MR.jpg"
        }
    ]
  return <UsersList items={USERS}/>;
};

export default Users;
