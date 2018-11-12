import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";

import RootAppRoutes from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <RootAppRoutes />
    </Providers>
  </React.StrictMode>,
  rootElement
);
