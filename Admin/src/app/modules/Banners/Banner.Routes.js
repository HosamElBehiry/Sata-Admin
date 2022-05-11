import React from "react";
import { Switch, Route } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Banners from "./View/Banners";

function BannerRoutes() {
  return (
    <Switch>
      <Route path="/banners/all" exact component={Banners} />
      <Route path="/banners/update/:id" exact component={Update} />
      <Route path="/banners/add" exact component={Add} />
    </Switch>
  );
}

export default BannerRoutes;
