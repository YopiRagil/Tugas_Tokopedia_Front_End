import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Penjualan from "../pages/Penjualan";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/penjualan/" component={Penjualan} />
          <Route path="/penjualan/:statusOrder" component={Penjualan} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
