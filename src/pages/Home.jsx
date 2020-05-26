import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../component/Header";
import HomeMenu from "../component/HomeMenu";
import { connect } from "react-redux";
import { doLogout } from "../store/action/signInAction";
import { getOrderList } from "../store/action/orderAction";

class Home extends Component {
  componentDidMount = async () => {
    this.props.getOrderList();
  };

  render() {
    if (!this.props.isLogin) {
      this.props.history.push("/signin");
    }
    console.log("userDataHome", this.props.orderData);
    return (
      <div>
        {this.props.isLogin ? (
          <React.Fragment>
            <Header {...this.props} />
            <div>
              <HomeMenu {...this.props} />
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
    orderData: state.order.orderData,
    isLoading: state.order.isLoading,
  };
};

const mapDispatchToProps = {
  doLogout,
  getOrderList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
