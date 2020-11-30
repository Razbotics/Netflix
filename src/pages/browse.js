import React, { useContext, useState } from "react";
import BrowseContainer from "../containers/browse";
import FooterContainer from "../containers/footer";
import SelectProfileContainer from "../containers/profile";
import { FirebaseAuthContext } from "../context/firebase";

function Browse() {
  const [profile, setProfile] = useState(null);
  const { user } = useContext(FirebaseAuthContext);

  return profile ? (
    <>
      <BrowseContainer />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default Browse;
