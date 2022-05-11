import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import UpdateByVendor from "./Update/UpdateByVendor";
import Blocked from "./Views/Blocked";
import News from "./Views/News";
import NotSigned from "./Views/NotSigned";
import Online from "./Views/Online";
import Workers from "./Views/Workers";

function WorkerRoutes() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Switch>
      <Route path="/workers/all" component={Workers} />
      <Route path="/workers/online" component={Online} />
      <Route path="/workers/blocked" component={Blocked} />
      <Route path="/workers/Add" component={Add} />
      <Route
        path="/workers/Update/:id"
        component={user.roles[0] === 1 ? Update : UpdateByVendor}
      />
      <Route path="/workers/news/:days" component={News} />
      <Route path="/workers/not-signed/:days" component={NotSigned} />
    </Switch>
  );
}

export default WorkerRoutes;
