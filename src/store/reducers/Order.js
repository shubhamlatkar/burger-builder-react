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
    case actionTypes.FETCH_ORDER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.orders
      };
    case actionTypes.FETCH_ORDER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default orderReducer;
