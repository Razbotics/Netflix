import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebase";

function Signup() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.BROWSE);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <>
      <HeaderContainer showButton={false}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup}>
            <Form.Input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={!userName || !email || !password}
              type="submit"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?{" "}
            <Form.Link to={ROUTES.SIGNIN}>Sign In Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
export default Signup;
