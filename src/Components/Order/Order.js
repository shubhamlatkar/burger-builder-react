import React from "react";

import styles from "../Order/Order.module.css";

const Order = props => {
  return (
    <div className={styles.Order}>
      <p>Ingredients: salad:1</p>
      <p>
        Price : <strong>12$</strong>
      </p>
    </div>
  );
};

export default Order;
