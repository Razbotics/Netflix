import React from "react";
import { Link } from "react-router-dom";
import { Background, Container, Button, Logo } from "./styles/header";

export default function Header({ bg = true, children, ...otherProps }) {
  return bg ? <Background {...otherProps}>{children}</Background> : children;
}

Header.Frame = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Button = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

Header.Logo = ({ to, ...otherProps }) => {
  return (
    <Link to={to}>
      <Logo {...otherProps} />
    </Link>
  );
};
