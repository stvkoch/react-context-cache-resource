import React, { useContext, Suspense } from "react";

import context from "./../../contexts/users";

export default function UserDetail({ id }) {
  const { getResource } = useContext(context);

  const data = getResource("fetchUser")({ id });

  function RenderImage({src}) {
      const srcImage = getResource("loadImage")(
          "http://localhost:3001/" + data.image
      );
      return <img src={srcImage} alt={data.name} />;
  }


  return (
    <div className="user-detail">
      <div className="image">
        <Suspense fallback={<div>loading image...</div>}>
          <RenderImage src={data.image} />
        </Suspense>
      </div>
      <div className="name">{data.name}</div>
    </div>
  );
}
