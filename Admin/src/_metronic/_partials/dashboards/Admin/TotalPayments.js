import React from "react";
import { useGetTotalPayment } from "../../../../app/private/Reports";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { FormattedMessage } from "react-intl";
function TotalPayments() {
  const { data } = useGetTotalPayment();
  return (
    <div className="col-xl-4">
      <div className="card card-custom bg-light-success card-stretch gutter-b">
        <div className="card-body">
          <span className="svg-icon svg-icon-2x svg-icon-success">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Shopping/Sort3.svg")}
            ></SVG>
          </span>
          <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
            {data?.data.data} {` EGP`}
          </span>
          <span className="font-weight-bold text-muted font-size-sm">
            <FormattedMessage id="DASHBOARD.TOTALPAYMENTS" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TotalPayments;
