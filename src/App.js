import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import Orders from "./Containers/Orders/Orders";
import Auth from "./Containers/Auth/Auth";
import LogOut from "./Containers/Auth/LogOut/LogOut";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/Checkout" component={Checkout} />
            <Route path="/Orders" component={Orders} />
            <Route path="/Auth" component={Auth} />
            <Route path="/Logout" component={LogOut} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
