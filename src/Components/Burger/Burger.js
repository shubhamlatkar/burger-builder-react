import React from "react";

import BurgerIngredeints from "./BurgerIngredeints/BurgerIngredeints";
import styles from "./Burger.module.css";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredeints key={igKey + i} type={igKey} />;
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    });

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add elements</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredeints type={"bread-top"} />
      {transformedIngredients}
      <BurgerIngredeints type={"bread-bottom"} />
    </div>
  );
};

export default Burger;
