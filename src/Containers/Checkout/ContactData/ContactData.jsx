import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../../axios-orders";

import MyButton from "../../../Components/UI/Button/Button";
import styles from "../ContactData/ContactData.module.css";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import MyInput from "../../../Components/UI/MyInput/MyInput";
import * as actions from "../../../store/actions/index";

class ContactData extends Component {
  state = {
    userId: 1,
    orderId: null,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIPCode"
        },
        value: "",
        validation: {
          required: true,
          minLength: 3,
          maxLength: 6
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayVal: "Fastest" },
            { value: "cheapest", displayVal: "Cheap" }
          ]
        },
        value: "",
        valid: true,
        touched: false,
        validation: {}
      }
    },
    formIsValid: false,
    loading: false
  };

  checkValidity = (value, rules) => {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== "";
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });

    const formData = {};
    for (let formEleId in this.state.orderForm) {
      formData[formEleId] = this.state.orderForm[formEleId].value;
    }

    let order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    this.props.purcahseBurgerStart(order);
    //FOr local axios call
    // axios
    //   .post("/posts", order)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // axios
    //   .get("/orderId/" + this.state.userId, {
    //     headers: { "Access-Control-Allow-Origin": "*" }
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({ orderId: res.data }, () => {
    //       let ingredients = this.props.ingredients;
    //       ingredients.price = this.props.totalPrice;
    //       ingredients.orderId = this.state.orderId;
    //       axios
    //         .put("/ingredients", ingredients, {
    //           headers: { "Access-Control-Allow-Origin": "*" }
    //         })
    //         .then(res => {
    //           console.log(res.data);
    //           let address = formData;
    //           address.userId = this.state.userId;
    //           address.orderId = this.state.orserId;
    //           axios
    //             .put("/address", address, {
    //               headers: { "Access-Control-Allow-Origin": "*" }
    //             })
    //             .then(res => {
    //               console.log(res.data);
    //               this.setState({
    //                 loading: !this.state.loading
    //               });
    //             })
    //             .catch(err => {
    //               console.log(err);
    //             });
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  inputChangedHandler = (event, formId) => {
    let updatedForm = { ...this.state.orderForm };

    let updatedFormElementValue = { ...updatedForm[formId] };

    updatedFormElementValue.value = event.target.value;

    updatedFormElementValue.valid = this.checkValidity(
      updatedFormElementValue.value,
      updatedFormElementValue.validation
    );

    updatedFormElementValue.touched = true;
    // console.log("Element value",updatedFormElementValue);

    let formValid = true;
    for (let inputid in updatedForm) {
      formValid = updatedForm[inputid].valid && formValid;
    }

    updatedForm[formId] = updatedFormElementValue;

    this.setState({ orderForm: updatedForm, formIsValid: formValid });
  };

  render() {
    let formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementArray.map(formElement => {
          return (
            <MyInput
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              inValid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          );
        })}
        <MyButton btnType="Success" disabled={!this.state.formIsValid}>
          Order
        </MyButton>
      </form>
    );

    if (this.props.loading) form = <Spinner />;
    return (
      <div className={styles.ContactData}>
        <h4>Enter details</h4>
        {form}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    totalPrice: state.burgerBuilderReducer.totalPrice,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purcahseBurgerStart: orderData =>
      dispatch(actions.purcahseBurgerStart(orderData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactData);
