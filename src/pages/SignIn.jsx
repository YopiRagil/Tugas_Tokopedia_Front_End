import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInComponent from "../component/SignInComponent";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/action/signInAction";

class SignIn extends Component {
  render() {
    return (
      <React.Fragment>
        <SignInComponent {...this.props} />
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
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
