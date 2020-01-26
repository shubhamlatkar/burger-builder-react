import React from "react";

import "../BuildControl/BuildControl.css";

const buildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.Label}</div>
      <button
        className="Less"
        onClick={props.substracted}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
