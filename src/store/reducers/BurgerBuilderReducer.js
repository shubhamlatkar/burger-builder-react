import * as actionTypes from "../actions/actionsTypes";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

const initState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0
  },
  totalPrice: 4,
  error: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientType]
      };
    }
    case actionTypes.REMOVE_INGREDIENTS: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientType]: state.ingredients[action.ingredientType] - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientType]
      };
    }
    case actionTypes.SET_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.ingredients
      };
    }
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
