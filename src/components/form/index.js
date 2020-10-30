import React from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

function Form({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Form.Error = ({ children, ...otherProps }) => {
  return <Error {...otherProps}>{children}</Error>;
};

Form.Base = ({ children, ...otherProps }) => {
  return <Base {...otherProps}>{children}</Base>;
};

Form.Title = ({ children, ...otherProps }) => {
  return <Title {...otherProps}>{children}</Title>;
};

Form.Text = ({ children, ...otherProps }) => {
  return <Text {...otherProps}>{children}</Text>;
};

Form.TextSmall = ({ children, ...otherProps }) => {
  return <TextSmall {...otherProps}>{children}</TextSmall>;
};

Form.Link = ({ children, ...otherProps }) => {
  return <Link {...otherProps}>{children}</Link>;
};

Form.Input = ({ children, ...otherProps }) => {
  return <Input {...otherProps}>{children}</Input>;
};

Form.Submit = ({ children, ...otherProps }) => {
  return <Submit {...otherProps}>{children}</Submit>;
};

export default Form;
