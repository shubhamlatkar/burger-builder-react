import * as actionTypes from "../actions/actionsTypes";

const initState = {
  token: null,
  userId: null,
  error: null,
  loading: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        eroor: null,
        loading: false
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
