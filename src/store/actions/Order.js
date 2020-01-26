import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const purchaseBuilderSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStarted = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_STARTED
  };
};

export const purcahseBurgerStart = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStarted());
    axios
      .post("orders.json", orderData)
      .then(res => {
        console.log(res.data);
        dispatch(purchaseBuilderSuccess(res.data, orderData));
      })
      .catch(err => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
