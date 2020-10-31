import React, { useContext, useState } from "react";
import { FirebaseAuthContext } from "../context/firebase";
import SelectProfileContainer from "./profile";

function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(FirebaseAuthContext);

  return profile ? (
    <h1>Hello {profile.displayName}</h1>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
