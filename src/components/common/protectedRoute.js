import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { FirebaseAuthContext } from "../../context/firebase";

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  const { user } = useContext(FirebaseAuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to={ROUTES.HOME} />;
      }}
    />
  );
};

export default ProtectedRoute;
