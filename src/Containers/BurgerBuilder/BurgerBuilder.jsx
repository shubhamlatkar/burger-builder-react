import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import axios from "../../axios-orders";
import Modal from "../../Components/UI/Modal/Modal";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/WithErrorHandler/WithErrorHandler";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasing: false,
      loading: false
    };
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.substractIngredientHandler = this.substractIngredientHandler.bind(
      this
    );
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.pruchaseCancleHandler = this.pruchaseCancleHandler.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  purchaseHandler() {
    this.setState({ purchasing: true });
  }

  updatePurchaseState(updatedIngredients) {
    const ingredients = {
      ...updatedIngredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  addIngredientHandler(type) {
    let oldCount = this.props.ingredients[type];
    let updateCount = oldCount + 1;
    let updatedIngredients = {
      ...this.props.ingredients
    };
    updatedIngredients[type] = updateCount;
    let priceAddition = INGREDIENTS_PRICES[type];
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  substractIngredientHandler(type) {
    let oldCount = this.props.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let updateCount = oldCount - 1;
    let updatedIngredients = {
      ...this.props.ingredients
    };
    updatedIngredients[type] = updateCount;
    let priceAddition = INGREDIENTS_PRICES[type];
    let oldPrice = this.props.totalPrice;
    let newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  pruchaseCancleHandler() {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler() {
    this.props.history.push("/Checkout");
  }

  render() {
    const disabledInfo = {
      ...this.props.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.props.ingredients}
        purchaseCanceled={this.pruchaseCancleHandler}
        purcahseContinued={this.purchaseContinueHandler}
        totalPrice={this.state.totalPrice}
      />
    );
    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.pruchaseCancleHandler}
        >
          {orderSummary}
        </Modal>

        <Burger ingredients={this.props.ingredients} />
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          substractIngredient={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          currentPrice={this.props.totalPrice.toFixed(2)}
          purchaseable={this.updatePurchaseState(this.props.ingredients)}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientType =>
      dispatch(actionCreators.addIngredient(ingredientType)),
    onIngredientRemoved: ingredientType =>
      dispatch(actionCreators.removeIngredient(ingredientType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
