import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        err: null
      };
    }
    componentDidMount() {
      this.reqInter = axios.interceptors.request.use(req => {
        this.setState({ err: null });
        return req;
      });
      this.resInter = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ err: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInter);
      axios.interceptors.response.eject(this.resInter);
    }

    errorConfirmedHandler() {
      this.setState({ err: null });
    }
    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.err} close={this.errorConfirmedHandler}>
            {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
