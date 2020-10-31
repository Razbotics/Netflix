import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

function Profiles({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

Profiles.Title = ({ children, ...otherProps }) => {
  return <Title {...otherProps}>{children}</Title>;
};

Profiles.List = ({ children, ...otherProps }) => {
  return <List {...otherProps}>{children}</List>;
};

Profiles.User = ({ children, ...otherProps }) => {
  return <Item {...otherProps}>{children}</Item>;
};

Profiles.Picture = ({ src, ...otherProps }) => {
  return (
    <Picture
      {...otherProps}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profiles.Name = ({ children, ...otherProps }) => {
  return <Name {...otherProps}>{children}</Name>;
};

export default Profiles;
