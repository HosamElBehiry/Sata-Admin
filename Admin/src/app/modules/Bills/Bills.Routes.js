import React from "react";
import { Route, Switch } from "react-router-dom";
import Bills from "./Views/Bills";

function BillsRoutes() {
  return (
    <Switch>
      <Route path="/bills" exact component={Bills} />
    </Switch>
  );
}

export default BillsRoutes;
