import React from "react";

import "../Button/Button.css";

const MyButton = props => {
  return (
    <button
      className={["Button", [props.btnType]].join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
