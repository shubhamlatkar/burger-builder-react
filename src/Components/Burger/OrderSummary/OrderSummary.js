import React from "react";

import MyButton from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>{props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <MyButton btnType={"Danger"} clicked={props.purchaseCanceled}>
        CANCLE
      </MyButton>
      <MyButton btnType={"Success"} clicked={props.purcahseContinued}>
        CHCECKOUT
      </MyButton>
    </React.Fragment>
  );
};

export default orderSummary;
