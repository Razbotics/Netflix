import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import useContent from "../hooks/useContent";
import selectionMap from "../utils/selectionMap";
import { Header, Card, Player } from "../components";
import { FirebaseAuthContext, FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";

function BrowseContainer() {
  const series = useContent("series");
  const films = useContent("films");

  const [category, setCategory] = useState("series");
  const [fetchData, setFetchData] = useState({});
  const [slideRows, setSlideRows] = useState([]);
  const [slides, setSlides] = useState({});
  const [profile, setProfile] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(FirebaseAuthContext);

  useEffect(() => {
    const data = selectionMap({ series, films });
    setFetchData({ series, films });
    setSlides(data);
    setSlideRows(data[category]);
  }, [series, films, category]);

  const searchSlides = (searchTerm) => {
    console.log(slides[category]);
    const fuse = new Fuse(fetchData[category], {
      keys: ["description", "title", "genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (searchTerm.length > 3 && results.length > 0) {
      const searchData = { ...fetchData };
      searchData[category] = results;
      const newSlides = selectionMap(searchData);
      setSlideRows(newSlides[category]);
    } else {
      setSlideRows(slides[category]);
    }
  };

  return profile ? (
    <>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" />
            <Header.TextLink
              active={category === "series"}
              onClick={() => {
                setCategory("series");
                setSlideRows(slides["series"]);
              }}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films"}
              onClick={() => {
                setCategory("films");
                setSlideRows(slides["films"]);
              }}
            >
              Movies
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              onSearch={searchSlides}
              searchActive={searchActive}
              setSearchActive={setSearchActive}
            />
            {!searchActive && (
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
            )}
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
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
