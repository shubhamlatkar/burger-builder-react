import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionTypes from "../../../store/actions/index";

class LogOut extends React.Component {
  componentDidMount = () => {
    this.props.onLogout();
  };
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionTypes.authLogout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LogOut);
