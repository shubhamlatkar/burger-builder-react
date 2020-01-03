import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const purchaseBuilderSuccess = response => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    response: response
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purcahseBurgerStart = orderData => {
  return dispatch => {
    axios
      .post("/posts", orderData)
      .then(res => {
        console.log(res);
        dispatch(purchaseBuilderSuccess(res));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};
