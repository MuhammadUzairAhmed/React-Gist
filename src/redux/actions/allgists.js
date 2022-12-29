import { getGists } from "../../utils/sources";
import * as actionTypes from "./actionTypes";

//show loading message
const beforeCall = () => {
  return {
    type: actionTypes.BEFORE_ALL_GISTS,
  };
};
const onSuccess = (dataObj, username) => {
  //I can pass normalized data here
  return {
    type: actionTypes.ALL_GISTS_SUCCESS,
    payload: dataObj,
    username: username,
    isLoading: false,
  };
};
const onFailure = (err) => {
  return {
    type: actionTypes.ALL_GISTS_ERROR,
    errorMsg: err,
    isLoading: false,
  };
};

const fetchAllGists = (username) => {
  return function (dispatch) {
    dispatch(beforeCall());
    //make the API call
    return getGists(username)
      .then((res) => {
        if (res.length) {
          //if there is data retured by Github API
          dispatch(onSuccess(res, username));
        } else {
          dispatch(onFailure(`0 Gists Found for ${username}`));
        }
      })
      .catch((err) => {
        //if network is down
        //404 etc
        //console.log('Error', err);
        dispatch(onFailure(`Some problem while making call`)); //${err} - you can pass - optional
      });
  };
};

export { fetchAllGists };
