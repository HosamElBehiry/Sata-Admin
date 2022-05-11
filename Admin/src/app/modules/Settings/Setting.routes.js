import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";

function SettingRoutes() {
  return (
    <Switch>
      <Route path={`/Site-Settings`} component={Header} />
    </Switch>
  );
}

export default SettingRoutes;
