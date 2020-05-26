import React, { Component } from "react";
import RegisterComponent from "../component/RegisterComponent";
import { connect } from "react-redux";
import {
  registrasiUser,
  doLogin,
  changeInputUser,
} from "../store/action/signInAction";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <RegisterComponent {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  registrasiUser,
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
