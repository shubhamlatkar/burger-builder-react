import React, { Component } from "react";

import Drop from "../../UI/Drop/Drop";
import "../Modal/Modal.css";

class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        <Drop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            display: this.props.show ? "block" : "hidden"
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
