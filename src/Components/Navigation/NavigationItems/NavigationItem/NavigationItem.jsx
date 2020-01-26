import React from "react";
import { NavLink } from "react-router-dom";

import "../NavigationItem/Navigationitem.css";

const navigationitem = props => {
  return (
    <li className="Navigationitem">
      <NavLink to={props.link} activeClassName="active" exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationitem;
