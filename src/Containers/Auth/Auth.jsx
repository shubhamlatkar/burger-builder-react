import React from "react";
import { connect } from "react-redux";

import MyInput from "../../Components/UI/MyInput/MyInput";
import MyButton from "../../Components/UI/Button/Button";
import * as actions from "../../store/actions/index";
import "../Auth/Auth.css";
import Spinner from "../../Components/UI/Spinner/Spinner";

class Auth extends React.Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignUp: true
  };

  switchAuthMode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  inputChangedHandler = (event, controlName) => {
    let updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
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

    if (rules.isEmail) {
      var re = /\S+@\S+\.\S+/;
      isValid = isValid && re.test(value);
    }
    return isValid;
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  render() {
    let formElementArray = [];
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = (
      <form onSubmit={this.submitHandler}>
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
        <MyButton btnType="Success">
          {this.state.isSignUp ? "Sign Up" : "Sign In"}
        </MyButton>
        <MyButton btnType="Danger" clicked={this.switchAuthMode}>
          Switch to {this.state.isSignUp ? "sign In" : "sign Up"}
        </MyButton>
      </form>
    );

    form = this.props.loading ? <Spinner /> : form;

    let errorMessage = this.props.error ? (
      <p>{this.props.error.message}</p>
    ) : null;

    return (
      <React.Fragment>
        <div className="Auth">
          {errorMessage}
          {form}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
