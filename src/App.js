import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import Orders from "./Containers/Orders/Orders";
import Auth from "./Containers/Auth/Auth";
import LogOut from "./Containers/Auth/LogOut/LogOut";
import * as actions from "../src/store/actions/index";

class App extends Component {
  componentDidMount = () => {
    this.props.tryAutoSignUp();
  };
  render() {
    let routes = (
      <Switch>
        <Route path="/Auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/Checkout" component={Checkout} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Auth" component={Auth} />
          <Route path="/Logout" component={LogOut} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      );
    }
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAutoSignUp: () => dispatch(actions.checkAuthStatus())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
