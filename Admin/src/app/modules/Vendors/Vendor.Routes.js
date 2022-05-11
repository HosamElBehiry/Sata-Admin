import React from "react";
import { Route, Switch } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Blocked from "./Views/Blocked";
import News from "./Views/News";
import NotSigned from "./Views/NotSigned";
import Online from "./Views/Online";
import Profile from "./Views/Profile";
import Vendors from "./Views/Vendors";

function VendorRoutes() {
  return (
    <Switch>
      <Route path="/vendors/all" component={Vendors} />
      <Route path="/vendors/online" component={Online} />
      <Route path="/vendors/profile/:id" component={Profile} />
      <Route path="/vendors/blocked" component={Blocked} />
      <Route path="/vendors/Add" component={Add} />
      <Route path="/vendors/Update/:id" component={Update} />
      <Route path="/vendors/news/:days" component={News} />
      <Route path="/vendors/not-signed/:days" component={NotSigned} />
    </Switch>
  );
}

export default VendorRoutes;
