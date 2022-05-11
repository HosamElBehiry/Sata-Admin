import React from "react";
import { Route, Switch } from "react-router-dom";
import Brands from "./Brands";
import Category from "./Category";
import Deliveries from "./Delivery";
import Orders from "./Orders";
import Products from "./Products";
import Users from "./Users";
import Vendors from "./Vendors";
import Workers from "./Workers";

function DeleteRoutes() {
  return (
    <Switch>
      <Route path="/deleted/user" component={Users} />
      <Route path="/deleted/vendor" component={Vendors} />
      <Route path="/deleted/worker" component={Workers} />
      <Route path="/deleted/delivery" component={Deliveries} />
      <Route path="/deleted/brand" component={Brands} />
      <Route path="/deleted/category" component={Category} />
      <Route path="/deleted/product" component={Products} />
      <Route path="/deleted/order" component={Orders} />
    </Switch>
  );
}

export default DeleteRoutes;
