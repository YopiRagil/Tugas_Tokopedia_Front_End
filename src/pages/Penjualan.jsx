import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../component/Headers";
import PenjualanMenu from "../component/PenjualanMenu";
import { connect } from "react-redux";
import { doLogout, getDataUser } from "../store/action/signInAction";
import {
  getOrderList,
  getOrderCategory,
  changeStatusOrder,
  changeInputUser,
  doClear,
  InputSearchOrder,
} from "../store/action/orderAction";

class Penjualan extends Component {
  componentDidMount = async () => {
    this.props.getDataUser();
    this.props.getOrderList();
    this.props.getOrderCategory();
  };
  componentDidUpdate() {
    if (this.props.update === true) {
      if (this.props.history.location.pathname === "/penjualan")
        this.props.getOrderList();
      else {
        this.props.getOrderCategory(this.props.statusOrder);
      }
    }
  }
  render() {
    console.log("cek props penjualan", this.props.history.location.pathname);
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Header {...this.props.userData} {...this.props} />
            <div>
              <PenjualanMenu {...this.props.userData} {...this.props} />
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
    search: state.order.search,
    update: state.order.update,
    statusOrder: state.order.statusOrder,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  getDataUser,
  doLogout,
  getOrderList,
  getOrderCategory,
  changeStatusOrder,
  doClear,
  InputSearchOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Penjualan);
