import { Switch, Route } from "react-router-dom";
import React from "react";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Sliders from "./View/Sliders";

function SliderRoutes() {
  return (
    <Switch>
      <Route path="/sliders/all" exact component={Sliders} />
      <Route path="/sliders/add" exact component={Add} />
      <Route path="/sliders/update/:id" exact component={Update} />
    </Switch>
  );
}

export default SliderRoutes;
