import React from "react";

import Drop from "../../UI/Drop/Drop";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";
import "../SideDrawer/SideDrawer.css";

const sideDrawer = props => {
  return (
    <React.Fragment>
      <Drop show={props.show} clicked={props.close} />
      <div className="SideDrawer">
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <Navigationitems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
