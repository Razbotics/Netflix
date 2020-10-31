import React, { useContext } from "react";
import { FirebaseAuthContext } from "../context/firebase";
import SelectProfileContainer from "./profile";

function BrowseContainer({ slides }) {
  const { user } = useContext(FirebaseAuthContext);

  return <SelectProfileContainer user={user} />;
}

export default BrowseContainer;
