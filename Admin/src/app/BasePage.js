import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { DashboardPage } from "./pages/DashboardPage";

const BrandsComponent = lazy(() => import("./modules/Brands/BrandsRoute"));

const BillsComponent = lazy(() => import("./modules/Bills/Bills.Routes"));

const CategoryComponent = lazy(() =>
  import("./modules/Category/CategoryRouters")
);

const Products = lazy(() => import("./modules/Products/Products.Routes"));

const OrderComponent = lazy(() => import("./modules/Orders/OrderRouters"));

const BannersComponents = lazy(() => import("./modules/Banners/Banner.Routes"));

const SliderComponent = lazy(() => import("./modules/Sliders/Slider.Routes"));

const Shippingpage = lazy(() => import("./modules/Shipping/ShippingRoutes"));

const NotificationsComponent = lazy(() =>
  import("./modules/Notifications/Notifications.Routes")
);

const CompanyShippingComponent = lazy(() =>
  import("./modules/CompanyShipping/CompanyShippingRoutes")
);

const CustomerComponent = lazy(() =>
  import("./modules/Customers/Customers.Routes")
);

const VendorComponent = lazy(() => import("./modules/Vendors/Vendor.Routes"));

const DeliveryComponent = lazy(() =>
  import("./modules/Deliveries/Deliveries.Routes")
);

const DeletedComponent = lazy(() => import("./modules/Deleted/Delete.Routes"));

const WorkerComponent = lazy(() => import("./modules/Workers/Worker.Routes"));

const SiteSettings = lazy(() => import("./modules/Settings/Setting.routes"));

const RatesComponent = lazy(() => import("./modules/Rates/Rates.routes"));

const BlogComponent = lazy(() => import("./pages/Blogs"));

const CouponsComponent = lazy(() => import("./pages/Coupons"));

export default function BasePage() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/dashboard" />}
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/products" component={Products} />
        <ContentRoute path="/orders" component={OrderComponent} />
        <ContentRoute path="/workers" component={WorkerComponent} />
        {user.roles[0] === 1 && (
          <>
            <ContentRoute path="/builder" component={BuilderPage} />
            <ContentRoute path="/brands" component={BrandsComponent} />
            <ContentRoute path="/categories" component={CategoryComponent} />
            <ContentRoute path="/customers" component={CustomerComponent} />
            <ContentRoute path="/vendors" component={VendorComponent} />
            <ContentRoute path="/deliveries" component={DeliveryComponent} />
            <ContentRoute path="/banners" component={BannersComponents} />
            <ContentRoute path="/sliders" component={SliderComponent} />
            <ContentRoute path="/shipping" component={Shippingpage} />
            <ContentRoute path="/blogs-page" component={BlogComponent} />
            <ContentRoute path="/bills" component={BillsComponent} />
            <ContentRoute path="/deleted" component={DeletedComponent} />{" "}
            <ContentRoute
              path="/Notifications"
              component={NotificationsComponent}
            />
            <ContentRoute
              path="/company-shipping"
              component={CompanyShippingComponent}
            />
            <ContentRoute path="/Site-Settings" component={SiteSettings} />
            <ContentRoute path="/coupons" component={CouponsComponent} />{" "}
            <ContentRoute path="/rates" component={RatesComponent} />{" "}
          </>
        )}
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
