import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGist } from "../../redux/actions/singlegist";
import Detail from "./Detail";

const DetailContainer = (props) => {
  const dispatch = useDispatch();
  const singleGist = useSelector((state) => state.singleGistReducer);
  return (
    <Detail
      {...props}
      fetchSingleGist={(gistId) => dispatch(fetchSingleGist(gistId))}
      singleGist={singleGist}
    />
  );
};
export default DetailContainer;
