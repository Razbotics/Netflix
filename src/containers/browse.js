import React, { useContext, useState, useEffect } from "react";
import { Header, Card } from "../components";
import { FirebaseAuthContext, FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";

function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(FirebaseAuthContext);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile ? (
    <>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" />
            <Header.TextLink
              active={category === "series"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "movies"}
              onClick={() => setCategory("movies")}
            >
              Movies
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
