import React from "react";
import { Switch, Route } from "react-router-dom";
import Add from "./Add/Add";
import Update from "./Update/Update";
import Blogs from "./View/Blogs";

function BlogRoute() {
  return (
    <Switch>
      <Route path="/blogs-page" exact component={Blogs} />
      <Route path="/blogs-page/new" exact component={Add} />
      <Route path="/blogs-page/update" exact component={Update} />
    </Switch>
  );
}

export default BlogRoute;
