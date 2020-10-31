import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext, FirebaseAuthContext } from "./context/firebase";
import * as ROUTES from "./constants/routes";
import { Browse, Home, Signin, Signup } from "./pages";
import { Loading, ProtectedRoute } from "./components";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = firebase.auth();

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((usr) => {
      setUser(usr);
      setLoading(false);
    });
  }, [auth]);

  return loading ? (
    <Loading />
  ) : (
    <FirebaseContext.Provider value={{ firebase }}>
      <FirebaseAuthContext.Provider value={{ user, loading }}>
        <BrowserRouter>
          {user && <Redirect to={ROUTES.BROWSE} />}
          <Route exact path={ROUTES.SIGNIN} component={Signin} />
          <Route exact path={ROUTES.SIGNUP} component={Signup} />
          <ProtectedRoute exact path={ROUTES.BROWSE} component={Browse} />
          <Route exact path={ROUTES.HOME} component={Home} />
        </BrowserRouter>
      </FirebaseAuthContext.Provider>
    </FirebaseContext.Provider>
  );
}
