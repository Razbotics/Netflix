import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Background,
  Container,
  Feature,
  Group,
  FeatureCallOut,
  Picture,
  Button,
  Logo,
  Text,
  TextLink,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...otherProps }) {
  return bg ? <Background {...otherProps}>{children}</Background> : children;
}

Header.Frame = ({ children, ...otherProps }) => {
  return <Container {...otherProps}>{children}</Container>;
};

Header.Search = function HeaderSearch({
  onSearch,
  searchActive,
  setSearchActive,
  ...otherProps
}) {
  const [value, setValue] = useState("");
  return (
    <Search {...otherProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          onSearch(target.value);
        }}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = ({ children, ...otherProps }) => {
  return <PlayButton {...otherProps}>{children}</PlayButton>;
};

Header.Group = ({ children, ...otherProps }) => {
  return <Group {...otherProps}>{children}</Group>;
};

Header.Dropdown = ({ children, ...otherProps }) => {
  return <Dropdown {...otherProps}>{children}</Dropdown>;
};

Header.Feature = ({ children, ...otherProps }) => {
  return <Feature {...otherProps}>{children}</Feature>;
};

Header.Profile = ({ children, ...otherProps }) => {
  return <Profile {...otherProps}>{children}</Profile>;
};

Header.FeatureCallOut = ({ children, ...otherProps }) => {
  return <FeatureCallOut {...otherProps}>{children}</FeatureCallOut>;
};

Header.Picture = ({ src, ...otherProps }) => {
  return <Picture {...otherProps} src={`/images/users/${src}.png`} />;
};

Header.Text = ({ children, ...otherProps }) => {
  return <Text {...otherProps}>{children}</Text>;
};

Header.TextLink = ({ children, ...otherProps }) => {
  return <TextLink {...otherProps}>{children}</TextLink>;
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
