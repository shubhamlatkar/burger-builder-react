import React from "react";

import "../Drop/Drop.css";

const backDrop = props => {
  return props.show ? <div onClick={props.clicked} className="Drop" /> : null;
};

export default backDrop;
