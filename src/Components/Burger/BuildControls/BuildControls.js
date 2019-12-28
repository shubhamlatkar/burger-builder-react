import React from "react";

import styles from "../BuildControls/BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = props => {
  const controls = [
    {
      label: "Salad",
      type: "salad"
    },
    {
      label: "Bacon",
      type: "bacon"
    },
    {
      label: "Cheese",
      type: "cheese"
    },
    {
      label: "Meat",
      type: "meat"
    }
  ];

  return (
    <div className={styles.BuildControls}>
      <h4>
        Current Price = <strong>{props.currentPrice}</strong>
      </h4>
      {controls.map(cntrl => (
        <BuildControl
          key={cntrl.label}
          Label={cntrl.label}
          added={() => props.ingredientAdded(cntrl.type)}
          substracted={() => props.substractIngredient(cntrl.type)}
          disabled={props.disabled[cntrl.type]}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchaseable}
        className={styles.OrderButton}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
