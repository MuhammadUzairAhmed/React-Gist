import React from "react";
import { useDispatch } from "react-redux";
import { fetchAllGists } from "../../redux/actions/allgists";
import SearchInput from "./SearchInput";

const SearchContainer = () => {
  const dispatch = useDispatch();
  return <SearchInput fetchGistReq={(val) => dispatch(fetchAllGists(val))} />;
};

export default SearchContainer;
