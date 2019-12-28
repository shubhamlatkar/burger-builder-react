import React, { Component } from "react";

import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.css";

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
        <Toolbar />
        <SideDrawer
          show={this.state.showSodeDrawer}
          close={this.sideDrawerCloseHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
