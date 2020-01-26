import * as actionTypes from "../actions/actionsTypes";

const initState = {
  orders: [],
  loading: false,
  purchased: false
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS: {
      let temOrder = {
        ...action.orderData,
        id: action.id
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(temOrder)
      };
    }
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
