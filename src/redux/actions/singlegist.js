import { getGistDetail } from "../../utils/sources";
import * as actionTypes from "./actionTypes";

//show loading message
const beforeCall = () => {
  return {
    type: actionTypes.BEFORE_SINGLE_GIST,
  };
};
const onSuccess = (dataObj) => {
  //I can pass normalized data here
  return {
    type: actionTypes.SINGLE_GIST_SUCCESS,
    payload: dataObj,
    isLoading: false,
  };
};
const onFailure = (err) => {
  return {
    type: actionTypes.SINGLE_GIST_ERROR,
    errorMsg: err,
    isLoading: false,
  };
};

//thunk middleware action
const fetchSingleGist = (gistId) => {
  return function (dispatch) {
    dispatch(beforeCall());
    //make the API call
    return getGistDetail(gistId)
      .then((res) => {
        //console.log('Git Response Single', res);
        //if there is data retured by Github API
        if (res.forks.length) {
          dispatch(onSuccess(res));
        } else {
          dispatch(onFailure("No forks."));
        }
      })
      .catch((err) => {
        //if network is down
        //404 etc
        //console.log('Error', err);
        dispatch(onFailure(`Some problem while fetching forks.`)); //${err} - you can pass - optional
      });
  };
};

export { fetchSingleGist };
