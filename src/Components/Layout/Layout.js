import React, { Component } from "react";
import { connect } from "react-redux";

import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSodeDrawer: false
    };
    this.sideDrawerCloseHandler = this.sideDrawerCloseHandler.bind(this);
  }

  sideDrawerCloseHandler() {
    this.setState({ showSodeDrawer: !this.state.showSodeDrawer });
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar isAuthenticated={this.props.isAuthenticated} />
        <SideDrawer
          show={this.state.showSodeDrawer}
          close={this.sideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};

export default connect(
  mapStateToProps,
  null
)(Layout);
