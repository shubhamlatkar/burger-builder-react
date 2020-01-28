import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

export const addIngredient = ingredientType => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientType: ingredientType
  };
};
export const removeIngredient = ingredientType => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientType: ingredientType
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = error => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: error
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchIngredientsFailed(error));
      });
  };
};
