import React from "react";

import Burger from "../../Burger/Burger";
import MyButton from "../../UI/Button/Button";
import styles from "../CheckoutSummary/CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h2>
        <strong>Hope it tastes well</strong>
      </h2>
      <div style={{ width: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <MyButton btnType={"Danger"} clicked={props.checkoutCancelled}>
        CANCLE
      </MyButton>
      <MyButton btnType={"Success"} clicked={props.checkOutContinue}>
        CHCECKOUT
      </MyButton>
    </div>
  );
};

export default CheckoutSummary;
