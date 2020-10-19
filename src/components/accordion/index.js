import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...otherProps }) {
  return (
    <Container {...otherProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...otherProps }) {
  return <Frame {...otherProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...otherProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...otherProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...otherProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...otherProps}>
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...otherProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...otherProps}>{children}</Body> : null;
};
