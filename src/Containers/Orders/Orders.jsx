import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "../../Components/Order/Order";
import * as actions from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount = () => {
    this.props.onFetchOrders(this.props.token);
  };
  render() {
    let orders = !this.props.loading ? (
      this.props.orders.map((order, index) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
            orderData={order.orderData}
            id={index}
          />
        );
      })
    ) : (
      <Spinner />
    );
    return (
      <div className="orders-container">
        {this.props.orders.length > 0 ? (
          orders
        ) : (
          <h3>Please Log In To see your orders</h3>
        )}
      </div>
    );
  }
}

const maptStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: token => dispatch(actions.fetchOrders(token))
  };
};

export default connect(
  maptStateToProps,
  mapDispatchToProps
)(Orders);
