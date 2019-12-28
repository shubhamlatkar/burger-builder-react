import React from "react";

import Navigationitems from "../../Navigation/NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import styles from "../Toolbar/Toolbar.module.css";

const toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <Navigationitems />
      </nav>
    </header>
  );
};

export default toolbar;
