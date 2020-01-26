import React from "react";

import "../BuildControls/BuildControls.css";
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
    <div className="BuildControls">
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
        className="OrderButton"
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
