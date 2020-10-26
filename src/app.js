import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/home";
import Signin from "./pages/signin";

export default function App() {
  return (
    <BrowserRouter>
      <Route path={ROUTES.SIGNIN} component={Signin} />
      <Route exact path={ROUTES.HOME} component={Home} />
    </BrowserRouter>
  );
}
