import React, { Suspense } from "react";

import Route from "./components/route";
import Topbar from "./components/topbar";
import UserShell from "./shell/users";
import ListProdutcs from "./components/list-products";

export default function Routes() {
  return (
    <Suspense fallback={<div>global loading...</div>}>
      <Route path="(.*)">
        <Topbar />
      </Route>
      <Route path="/">
        <div>initial</div>
      </Route>
      <Route path="/users">
        <UserShell />
      </Route>
      <Route path="/products">
        <ListProdutcs />
      </Route>
    </Suspense>
  );
}
