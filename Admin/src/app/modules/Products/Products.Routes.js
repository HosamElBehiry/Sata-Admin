import React from "react";
import { Switch, Route } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Detail from "./Views/Detail";
import Lowest from "./Views/Lowest";
import MostBought from "./Views/MostBought";
import Products from "./Views/Products";
function ProductsRoute() {
  return (
    <Switch>
      <Route path="/products/all" exact component={Products} />
      <Route path="/products/lowest" exact component={Lowest} />
      <Route path="/products/mostBought" exact component={MostBought} />
      <Route path="/products/Add" exact component={Add} />
      <Route path="/products/detail/:id" exact component={Detail} />
      <Route path="/products/update/:id" exact component={Update} />
    </Switch>
  );
}

export default ProductsRoute;
