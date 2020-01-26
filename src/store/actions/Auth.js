import * as actionTypes from "../actions/actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
        authData
      )
      .then(response => {
        console.log(response.data);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log("error", error);
        dispatch(authFail(error));
      });
  };
};
