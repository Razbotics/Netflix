import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, Signin, Signup } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Route path={ROUTES.SIGNIN} component={Signin} />
      <Route path={ROUTES.SIGNUP} component={Signup} />
      <Route path={ROUTES.BROWSE} component={Browse} />
      <Route exact path={ROUTES.HOME} component={Home} />
    </BrowserRouter>
  );
}
