import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../NavigationItem/Navigationitem.module.css";

const navigationitem = props => {
  return (
    <li className={styles.Navigationitem}>
      <NavLink
        to={props.link}
        activeClassName={styles.active}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationitem;
