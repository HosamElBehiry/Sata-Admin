import React from "react";
import { Route, Switch } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Blocked from "./Views/Blocked";
import Deliveries from "./Views/Deliveries";
import News from "./Views/News";
import NotSigned from "./Views/NotSigned";

function DeliveriesRoutes() {
  return (
    <Switch>
      <Route path="/deliveries/all" exact component={Deliveries} />
      <Route path="/deliveries/blocked" exact component={Blocked} />
      <Route path="/deliveries/Add" exact component={Add} />
      <Route path="/deliveries/Update/:id" exact component={Update} />
      <Route path="/deliveries/not-signed/:days" exact component={NotSigned} />
      <Route path="/deliveries/news/:days" exact component={News} />
    </Switch>
  );
}

export default DeliveriesRoutes;
