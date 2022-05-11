import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBrands from "./AddBrandComponent/AddBrands";
import BrandsComponent from "./BrandsComponent/BrandsComponent";
import Products from "./BrandsComponent/Products";
import UpdateBrandComponent from "./UpdateBrandComponent/UpdateBrandComponent";

function BrandsRoute() {
  return (
    <Switch>
      <Route path="/brands" exact component={BrandsComponent} />
      <Route path="/brands/add" exact component={AddBrands} />
      <Route path="/brands/products/:id" exact component={Products} />
      <Route path="/brands/update/:id" exact component={UpdateBrandComponent} />
    </Switch>
  );
}

export default BrandsRoute;
