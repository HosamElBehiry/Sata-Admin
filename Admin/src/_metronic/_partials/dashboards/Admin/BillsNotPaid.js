import React from "react";
import { useGetBillsNotPaid } from "../../../../app/private/Reports";
import { toAbsoluteUrl } from "../../../_helpers";
import SVG from "react-inlinesvg";
import { FormattedMessage } from "react-intl";
function BillsNotPaid() {
  const { data } = useGetBillsNotPaid();
  return (
    <div className="col-xl-4">
      <div className="card card-custom bg-light-success card-stretch gutter-b">
        <div className="card-body">
          <span className="svg-icon svg-icon-2x svg-icon-success">
            <SVG
              src={toAbsoluteUrl(
                "/media/svg/icons/Navigation/Angle-double-up.svg"
              )}
            ></SVG>
          </span>
          <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
            {data?.data.data[0]?.price} {` EGP`}
          </span>
          <span className="font-weight-bold text-muted font-size-sm">
            <FormattedMessage id="DASHBOARD.NOT.PAID.BILLS" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BillsNotPaid;
