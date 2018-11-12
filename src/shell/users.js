import React, { Suspense } from "react";

import ListUsers from "./../components/list-users";

export default function UserShell() {
  return (
    <Suspense fallback={<div>Loading user list...</div>}>
      <ListUsers />
    </Suspense>
  );
}
