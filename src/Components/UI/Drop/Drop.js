import React from "react";

import styles from "../Drop/Drop.module.css";

const backDrop = props => {
  return props.show ? (
    <div onClick={props.clicked} className={styles.Drop} />
  ) : null;
};

export default backDrop;
