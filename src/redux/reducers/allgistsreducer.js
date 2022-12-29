import * as actionTypes from "../actions/actionTypes";

//data model structure for all GISTS
const initialState = {
  username: "",
  isLoading: false,
  error: null,
  gists: [],
};

const allGistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEFORE_ALL_GISTS:
      return {
        ...state,
        gists: [],
        isLoading: true,
        username: "",
        error: null,
      };
    case actionTypes.ALL_GISTS_SUCCESS:
      return {
        ...state,
        gists: [...action.payload],
        isLoading: false,
        username: action.username,
        error: null,
      };
    case actionTypes.ALL_GISTS_ERROR:
      return {
        ...state,
        gists: [],
        isLoading: false,
        username: action.username,
        error: action.errorMsg,
      };
    default:
      return state;
  }
};

export default allGistsReducer;
