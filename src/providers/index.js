import React from "react";
import axios from "axios";

import RouterProvider from "./router";
import Provider from "./provider";

import usersContext from "./../contexts/users";
import productsContext from "./../contexts/products";

function fetchUsers(query) {
  return fetch("http://localhost:3001/people").then(resp => resp.json());
}


function fetchUser(query) {
    return fetch("http://localhost:3001/people/"+query.id).then(resp => resp.json());
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

const externalResources = {
    loadImage: function(src) {
        const image = new Image();
        return new Promise(resolve => {
            image.onload = () => setTimeout(() => resolve(src), 3000);
            image.src = src;
        });
    }
};

export default function Providers({ children }) {
  return (
    <Provider context={productsContext} fetchProducts={fetchProducts}>
      <Provider context={usersContext} fetchUsers={fetchUsers} fetchUser={fetchUser} {...externalResources} >
        <RouterProvider>{children}</RouterProvider>
      </Provider>
    </Provider>
  );
}
