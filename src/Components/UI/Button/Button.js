import React from "react";

import styles from "../Button/Button.module.css";

const MyButton = props => {
  return (
    <button
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default MyButton;
