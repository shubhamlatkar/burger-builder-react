import React from "react";

import styles from "../BuildControl/BuildControl.module.css";

const buildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.Label}</div>
      <button
        className={styles.Less}
        onClick={props.substracted}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default buildControl;
