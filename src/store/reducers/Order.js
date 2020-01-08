import * as actionTypes from "../actions/actionsTypes";

const initState = {
  orders: [],
  loading: false
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(action.orderData)
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {};
    case actionTypes.PURCHASE_BURGER_STARTED:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default orderReducer;
