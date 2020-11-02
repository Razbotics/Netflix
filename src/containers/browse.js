import React, { useContext, useState } from "react";
import { Header } from "../components";
import { FirebaseAuthContext, FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profile";
import * as ROUTES from "../constants/routes";

function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(FirebaseAuthContext);

  return profile ? (
    <Header src="joker1" dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
          <Header.TextLink>Series</Header.TextLink>
          <Header.TextLink>Movies</Header.TextLink>
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
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
