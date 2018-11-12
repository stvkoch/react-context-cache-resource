import React, { useContext } from "react";
import pathToRegexp from "path-to-regexp";

import RouterContext from "./../../contexts/router";

export default function Route({ path, children }) {
  const { url } = useContext(RouterContext);
  const re = pathToRegexp(path);
  if (re.test(url)) {
    return children;
  }
  return null;
}
