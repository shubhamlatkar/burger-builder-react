import React from "react";

import styles from "../NavigationItems/Navigationitems.module.css";
import Navigationitem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationitems = props => {
  return (
    <ul className={styles.Navigationitems}>
      <Navigationitem link="/" exact>
        Burger Builder
      </Navigationitem>
      <Navigationitem link="/Orders">Orders </Navigationitem>
    </ul>
  );
};

export default navigationitems;
