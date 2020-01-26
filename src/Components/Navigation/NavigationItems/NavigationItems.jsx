import React from "react";

import "../NavigationItems/Navigationitems.css";
import Navigationitem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationitems = props => {
  return (
    <ul className="Navigationitems">
      <Navigationitem link="/" exact>
        Burger Builder
      </Navigationitem>
      <Navigationitem link="/Orders">Orders </Navigationitem>
      <Navigationitem link="/Auth">Authentation </Navigationitem>
    </ul>
  );
};

export default navigationitems;
