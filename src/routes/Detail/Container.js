import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGist } from "../../redux/actions/singlegist";
import Detail from "./Detail";

const DetailContainer = (props) => {
  const dispatch = useDispatch();
  const singleGist = useSelector((state) => state.singleGistReducer);

  const fetchSingleGistReq = useCallback(
    (gistId) => {
      dispatch(fetchSingleGist(gistId));
    },
    [dispatch]
  );

  return (
    <Detail
      {...props}
      fetchSingleGist={fetchSingleGistReq}
      singleGist={singleGist}
    />
  );
};
export default DetailContainer;
