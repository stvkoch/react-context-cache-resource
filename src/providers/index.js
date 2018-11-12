import React from "react";

import RouterProvider from "./router";
//import UserProvider from "./users";
import Provider from "./provider";

import usersContext from "./../contexts/users";
import productsContext from "./../contexts/products";

function fetchUsers(query) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([{ id: 1, name: "user" }, query]);
    }, 2000)
  );
}

function fetchProducts(query, setData) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve([{ id: 1, name: "prod" }, query]);
    }, 2000)
  ).then(result => {
    result.push({ id: 1000, name: "processed promise" });
    return result;
  });
}

export default function Providers({ children }) {
  return (
    <Provider context={productsContext} fetchProducts={fetchProducts}>
      <Provider context={usersContext} fetchUsers={fetchUsers}>
        <RouterProvider>{children}</RouterProvider>
      </Provider>
    </Provider>
  );
}
