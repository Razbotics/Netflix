import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ src, ...otherProps }) {
  return (
    <Spinner {...otherProps}>
      <LockBody />
      {src && <Picture src={`/images/users/${src}.png`} />}
    </Spinner>
  );
}

Loading.ReleaseBody = () => {
  return <ReleaseBody />;
};
