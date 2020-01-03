import * as actionTypes from "./actionsTypes";

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
