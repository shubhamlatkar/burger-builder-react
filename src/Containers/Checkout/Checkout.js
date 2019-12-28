import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    },
    totalPrice: 0
  };

  componentDidMount = () => {
    const query = new URLSearchParams(this.props.location.search);
    const MyIngredients = {};
    let price;
    for (let params of query.entries()) {
      if (params[0] === "price") price = params[1];
      else MyIngredients[params[0]] = +params[1];
    }
    this.setState({ ingredients: MyIngredients, totalPrice: price });
  };

  checkoutCancelleHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <CheckoutSummary
            ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelleHandler}
            checkOutContinue={this.checkoutContinueHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            render={() => (
              <ContactData
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                {...this.props}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
