import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../component/Header";
import HomeMenu from "../component/HomeMenu";
import { connect } from "react-redux";
import { doLogout } from "../store/action/signInAction";

class Home extends Component {
  render() {
    console.log("userDataHome", this.props.userData);
    if (!this.props.isLogin) {
      this.props.history.push("/signin");
    }
    return (
      <div>
        {this.props.isLogin ? (
          <React.Fragment>
            <Header {...this.props} />
            <div>
              <HomeMenu />
            </div>
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    isLogin: state.user.isLogin,
    userData: state.user.userData,
  };
};

const mapDispatchToProps = {
  doLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
