import React from "react";

import RouterProvider from "./router";
import Provider from "./provider";

import usersContext from "./../contexts/users";
import productsContext from "./../contexts/products";

function fetchUsers(query) {
  return fetch("http://localhost:3001/people").then(resp => resp.json());
}

function fetchUser(query) {
  return fetch("http://localhost:3001/people/" + query.id).then(resp =>
    resp.json()
  );
}

function fetchProducts(query) {
  return fetch("http://localhost:3001/starships").then(resp => resp.json());
}

function fetchProduct(query) {
  return fetch("http://localhost:3001/starships/" + query.id).then(resp =>
    resp.json()
  );
}

/**
 * external resources
 *
 * @type {{loadImage: (function(*=): Promise<any>)}}
 */
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
    <Provider
      context={productsContext}
      fetchProducts={fetchProducts}
      fetchProduct={fetchProduct}
    >
      <Provider
        context={usersContext}
        fetchUsers={fetchUsers}
        fetchUser={fetchUser}
        {...externalResources}
      >
        <RouterProvider>{children}</RouterProvider>
      </Provider>
    </Provider>
  );
}
