import React, { useContext } from "react";

import context from "./../../contexts/users";

import List from "./../list";
import ListItem from "./../list-item";

export default function ListUsers() {
  const { getResource } = useContext(context);

  const data = getResource("fetchUsers")({ id: 2, name: "Lise" });

  return (
    <List items={data}>
      {user => <ListItem key={user.id}>{user.name}</ListItem>}
    </List>
  );
}
