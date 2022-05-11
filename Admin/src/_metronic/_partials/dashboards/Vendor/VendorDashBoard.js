import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";
import NumOrders from "./NumOrders";
import NumProducts from "./NumProducts";
import NumWorkers from "./NumWorkers";
import SumBills from "./SumBills";

const VendorDashBoard = () => {
  return (
    <div className="row">
      <div className="col-xl-6">
        <div
          className="card card-custom bgi-no-repeat card-stretch gutter-b"
          style={{
            backgroundPosition: `right top`,
            backgroundSize: `30% auto`,
            backgroundImage: `url(${toAbsoluteUrl(
              "/media/svg/shapes/abstract-1.svg"
            )})`,
          }}
        >
          <SumBills />
        </div>
      </div>

      <div className="col-xl-6">
        <div className="card card-custom bg-info card-stretch gutter-b">
          <NumWorkers />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card card-custom bg-danger card-stretch gutter-b">
          <NumProducts />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card card-custom bg-dark card-stretch gutter-b">
          <NumOrders />
        </div>
      </div>
    </div>
  );
};

export default VendorDashBoard;
