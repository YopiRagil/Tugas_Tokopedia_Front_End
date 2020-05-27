import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../component/Header";
import PenjualanMenu from "../component/PenjualanMenu";
import { connect } from "react-redux";
import { doLogout } from "../store/action/signInAction";
import {
  getOrderList,
  getOrderCategory,
  changeStatusOrder,
  changeInputUser,
  doClear,
} from "../store/action/orderAction";

class Penjualan extends Component {
  componentDidMount = async () => {
    this.props.getOrderList();
    this.props.getOrderCategory();
  };
  componentDidUpdate(prevProps) {
    if (this.props.orderData !== prevProps.orderData) {
      console.log("cek perubahan", this.props.orderData);
      console.log("cek sebelum perubahan", prevProps.orderData);
      // this.props.getOrderCategory(statusOrder);
    }
  }
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
              <PenjualanMenu {...this.props} />
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
  changeInput: (el) => changeInputUser(el),
  doLogout,
  getOrderList,
  getOrderCategory,
  changeStatusOrder,
  doClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Penjualan);
