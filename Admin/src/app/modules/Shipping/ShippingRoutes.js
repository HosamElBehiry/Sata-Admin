import React from "react";
import { Switch, Route } from "react-router-dom";
import City from "./City/Views/City";
import Add from "./Country/Add/Add";
import Update from "./Country/Update/Update";
import UpdateCity from "./City/Update/Update";
import Country from "./Country/Views/Country";
import AddCity from "./City/Add/Add";
import Regions from "./Region/Views/Regions";
import AddRegion from "./Region/Add/Add";
import UpdateRegion from "./Region/Update/Update";
function ShippingRoutes() {
  return (
    <Switch>
      <Route path="/shipping/county" exact component={Country} />
      <Route path="/shipping/county/Add" exact component={Add} />
      <Route path="/shipping/county/update/:id" exact component={Update} />
      <Route path="/shipping/city" exact component={City} />
      <Route path="/shipping/city/Add" exact component={AddCity} />
      <Route path="/shipping/city/update/:id" exact component={UpdateCity} />
      <Route path="/shipping/regions" exact component={Regions} />
      <Route path="/shipping/regions/Add" exact component={AddRegion} />
      <Route
        path="/shipping/regions/Update/:id"
        exact
        component={UpdateRegion}
      />
    </Switch>
  );
}

export default ShippingRoutes;
