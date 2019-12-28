import React from "react";

import styles from "../Logo/Logo.module.css";

const logo = props => {
  return (
    <div className={styles.Logo}>
      <img
        src="https://image.shutterstock.com/z/stock-vector-burger-abstract-outline-vector-logo-template-fast-food-isolated-line-art-stylized-icon-unusual-1036987246.jpg"
        alt="MyBurger"
      />
    </div>
  );
};

export default logo;
