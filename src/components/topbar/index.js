import React from "react";
import Link from "./../link";

export default function Topbar() {
  return (
    <React.Fragment>
      <Link path="/">Home</Link>
      <Link path="/users">Users</Link>
      <Link path="/products">Products</Link>
    </React.Fragment>
  );
}
