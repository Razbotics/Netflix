import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

function Feature({ children, otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Feature.Title = ({ children, ...otherProps }) => {
  return <Title {...otherProps}>{children}</Title>;
};

Feature.Subtitle = ({ children, ...otherProps }) => {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};

export default Feature;
