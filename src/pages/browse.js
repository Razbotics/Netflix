import React from "react";
import BrowseContainer from "../containers/browse";
import FooterContainer from "../containers/footer";
import useContent from "../hooks/useContent";
import selectionMap from "../utils/selectionMap";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} />
      <FooterContainer />
    </>
  );
}

export default Browse;
