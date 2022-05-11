import React from "react";
import { Switch, Route } from "react-router-dom";
import OrdersComponent from "./OrderComponent/OrdersComponent";
import OrderDetailComponent from "./OrderDetailComponent/OrderDetailComponent";
import OrderUpdateComponent from "./OrderUpdateComponent/OrderUpdateComponent";
import OrderType from "./Types/OrderType";

function OrderRouters() {
  return (
    <Switch>
      <Route path="/orders" exact component={OrdersComponent} />
      <Route path="/orders/type/:type" exact component={OrderType} />
      <Route
        path="/orders/order-item/:id"
        exact
        component={OrderDetailComponent}
      />
      <Route
        path="/orders/update-order/:id"
        exact
        component={OrderUpdateComponent}
      />
    </Switch>
  );
}

export default OrderRouters;
