import React from "react";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";

const SearhResultContainer = () => {
  // get all dist data from reducer
  const allGists = useSelector((state) => state.allGistsReducer);

  return <SearchResults allGists={allGists} />;
};

export default SearhResultContainer;
