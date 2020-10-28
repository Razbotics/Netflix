import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="" alt="Netflix" />
        <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
// /images/misc/netflix-logo.jpg
