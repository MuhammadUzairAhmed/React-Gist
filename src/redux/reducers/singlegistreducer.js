import * as actionTypes from "../actions/actionTypes";

//data model structure for all single gist and forks
const initialState = {
  forks: [],
  isLoading: false,
  error: null,
};

const singleGistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BEFORE_SINGLE_GIST:
      return { ...state, isLoading: true, error: null, forks: [] };
    case actionTypes.SINGLE_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        forks: [...action.payload.forks],
      };
    case actionTypes.SINGLE_GIST_ERROR:
      return { ...state, isLoading: false, error: action.errorMsg, forks: [] };
    default:
      return state;
  }
};

export default singleGistReducer;
