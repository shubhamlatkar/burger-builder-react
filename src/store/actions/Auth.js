import * as actionTypes from "../actions/actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url =
      (isSignUp
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=") +
      "AIzaSyA5HptAP6vtUuBQvQfeot8EwPuJVi6yG4Q";

    console.log("url", url);

    axios
      .post(url, authData)
      .then(response => {
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        console.log("error", error);
        dispatch(authFail(error));
      });
  };
};
