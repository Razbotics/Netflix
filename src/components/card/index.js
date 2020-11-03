import React, { useContext, createContext, useState } from "react";
import {
  Container,
  Content,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureClose,
  FeatureTitle,
  FeatureText,
  Maturity,
  Entities,
  Meta,
  Item,
  Image,
} from "./styles/card";

export const FeatureContext = createContext();

function Card({ children, ...otherProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...otherProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = ({ children, otherProps }) => {
  return <Group {...otherProps}>{children}</Group>;
};

Card.Title = ({ children, otherProps }) => {
  return <Title {...otherProps}>{children}</Title>;
};

Card.SubTitle = ({ children, otherProps }) => {
  return <SubTitle {...otherProps}>{children}</SubTitle>;
};

Card.Text = ({ children, otherProps }) => {
  return <Text {...otherProps}>{children}</Text>;
};

Card.Entities = ({ children, otherProps }) => {
  return <Entities {...otherProps}>{children}</Entities>;
};

Card.Meta = ({ children, otherProps }) => {
  return <Meta {...otherProps}>{children}</Meta>;
};

Card.Feature = function CardItem({ children, category, otherProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );
  return showFeature ? (
    <Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
      {...otherProps}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Item = function CardItem({ item, children, otherProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...otherProps}
    >
      {children}
    </Item>
  );
};

Card.Image = ({ ...otherProps }) => {
  return <Image {...otherProps} />;
};

export default Card;
