import React, { Component } from "react";
import propTypes from "prop-types";

import "./BurgerIngredeints.css";

class BurgerIngredeints extends Component {
  render() {
    let ingredeints = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredeints = <div className="BreadBottom" />;
        break;
      case "bread-top":
        ingredeints = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case "meat":
        ingredeints = <div className="Meat" />;
        break;
      case "cheese":
        ingredeints = <div className="Cheese" />;
        break;
      case "bacon":
        ingredeints = <div className="Bacon" />;
        break;
      case "salad":
        ingredeints = <div className="Salad" />;
        break;
      default:
        ingredeints = null;
    }
    return ingredeints;
  }
}

BurgerIngredeints.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredeints;
