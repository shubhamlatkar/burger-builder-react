import React from "react";

import "../NavigationItems/Navigationitems.css";
import Navigationitem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationitems = props => {
  return (
    <ul className="Navigationitems">
      <Navigationitem link="/" exact>
        Burger Builder
      </Navigationitem>
      {props.isAuthenticated ? (
        <Navigationitem link="/Orders">Orders </Navigationitem>
      ) : null}
      {!props.isAuthenticated ? (
        <Navigationitem link="/Auth">Sign Up </Navigationitem>
      ) : (
        <Navigationitem link="/logout">Log Out</Navigationitem>
      )}
    </ul>
  );
};

export default navigationitems;
