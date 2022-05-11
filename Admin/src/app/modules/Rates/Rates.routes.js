import React from "react";
import { Switch, Route } from "react-router-dom";
import Update from "./Update/Update";
import Rates from "./View/Rates";
function Ratesroutes() {
  return (
    <Switch>
      <Route path="/rates/:type" exact component={Rates} />
      <Route path="/rates/update/:id" exact component={Update} />
    </Switch>
  );
}

export default Ratesroutes;
