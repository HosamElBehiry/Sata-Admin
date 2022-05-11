import React from "react";
import { Route, Switch } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Blocked from "./Views/Blocked";
import Customers from "./Views/Customers";
import News from "./Views/News";
import NotSigned from "./Views/NotSigned";
import Online from "./Views/Online";

function CustomersRoutes() {
  return (
    <Switch>
      <Route path="/customers/all" component={Customers} />
      <Route path="/customers/online" component={Online} />
      <Route path="/customers/blocked" component={Blocked} />
      <Route path="/customers/Add" component={Add} />
      <Route path="/customers/update/:id" component={Update} />
      <Route path="/customers/news/:days" component={News} />
      <Route path="/customers/not-signed/:days" component={NotSigned} />
    </Switch>
  );
}

export default CustomersRoutes;
