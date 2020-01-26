import React from "react";

import Navigationitems from "../../Navigation/NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import "../Toolbar/Toolbar.css";

const toolbar = props => {
  return (
    <header className="Toolbar">
      <div>Menu</div>
      <div className="Logo">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <Navigationitems />
      </nav>
    </header>
  );
};

export default toolbar;
