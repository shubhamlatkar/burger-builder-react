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

export const purcahseBurgerStart = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStarted());
    axios
      .post("orders.json?auth=" + token, orderData)
      .then(res => {
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

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDER_FAIL,
    error: error
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionTypes.FETCH_ORDER_START
  };
};

export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(dispatch(fetchOrderStart()));
    const queryParam =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("orders.json" + queryParam)
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(dispatch(fetchOrdersSuccess(fetchedOrders)));
      })
      .catch(error => {
        dispatch(fetchOrdersFail(error));
      });
  };
};
