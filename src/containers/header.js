import React from "react";
import { Header, OptForm, Feature } from "../components";
import * as ROUTES from "../constants/routes";

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
        />
        <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
      </Header.Frame>
      <Feature>
        <Feature.Title>Unlimited Films, TV Programmes and more.</Feature.Title>
        <Feature.Subtitle>Watch Anywhere. Cancel at any time.</Feature.Subtitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </Feature>

      {children}
    </Header>
  );
}

export default HeaderContainer;
//
