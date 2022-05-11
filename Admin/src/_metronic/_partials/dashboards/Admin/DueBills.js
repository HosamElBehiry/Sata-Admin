import React from "react";
import { useGetDueBills } from "../../../../app/private/Reports";
import { toAbsoluteUrl } from "../../../_helpers";
import SVG from "react-inlinesvg";
import { FormattedMessage } from "react-intl";
function DueBills() {
  const { data } = useGetDueBills();
  return (
    <div className="col-xl-4">
      <div className="card card-custom bg-light-danger card-stretch gutter-b">
        <div className="card-body">
          <span className="svg-icon svg-icon-2x svg-icon-danger">
            <SVG
              src={toAbsoluteUrl(
                "/media/svg/icons/Navigation/Angle-double-down.svg"
              )}
            ></SVG>
          </span>
          <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
            {data?.data.data} {` EGP`}
          </span>
          <span className="font-weight-bold text-muted font-size-sm">
            <FormattedMessage id="DASHBOARD.DUE.BILLS" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DueBills;
