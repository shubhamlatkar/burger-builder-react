import React, { Component } from "react";
import propTypes from "prop-types";

import styles from "./BurgerIngredeints.module.css";

class BurgerIngredeints extends Component {
  render() {
    let ingredeints = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredeints = <div className={styles.BreadBottom} />;
        break;
      case "bread-top":
        ingredeints = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1} />
            <div className={styles.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredeints = <div className={styles.Meat} />;
        break;
      case "cheese":
        ingredeints = <div className={styles.Cheese} />;
        break;
      case "bacon":
        ingredeints = <div className={styles.Bacon} />;
        break;
      case "salad":
        ingredeints = <div className={styles.Salad} />;
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
