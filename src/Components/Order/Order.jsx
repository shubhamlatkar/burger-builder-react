import React from "react";

import "../Order/Order.css";

const Order = props => {
  return (
    <div className="Order">
      <p>
        <strong>id: {props.id}</strong>
      </p>
      <div className="container">
        <div className="col">
          <p>
            <strong>Ingredients</strong>
          </p>
          <p>salad:{props.ingredients.salad}</p>
          <p>bacon:{props.ingredients.bacon}</p>
          <p>cheese:{props.ingredients.cheese}</p>
          <p>meat:{props.ingredients.meat}</p>
          <p>
            Price : <strong>{props.price}$</strong>
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Country </strong>
            {props.orderData.country}
          </p>
          <p>
            <strong>DeliveryMethod </strong>
            {props.orderData.deliveryMethod}
          </p>
          <p>
            <strong>email </strong>
            {props.orderData.email}
          </p>
          <p>
            <strong>name </strong>
            {props.orderData.name}
          </p>
          <p>
            <strong>street </strong>
            {props.orderData.street}
          </p>
          <p>
            <strong>zipcode </strong>
            {props.orderData.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
