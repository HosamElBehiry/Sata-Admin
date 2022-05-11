import React from "react";
import { Switch, Route } from "react-router-dom";
import CouponForm from "./CouponForm";
import CouponList from "./CouponList";
import CouponsAboutToExpire from "./CouponsAboutToExpire";

function CouponRoute() {
  return (
    <Switch>
      <Route path="/coupons" exact component={CouponList} />
      <Route path="/coupons/add" exact component={CouponForm} />
      <Route path="/coupons/expire" exact component={CouponsAboutToExpire} />
    </Switch>
  );
}

export default CouponRoute;
