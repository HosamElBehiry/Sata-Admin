import React from "react";
import { useGetCommissions } from "../../../../app/private/Reports";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { FormattedMessage } from "react-intl";
function ProfitsAndCommissions() {
  const { data } = useGetCommissions();
  return (
    <>
      <div className="col-xl-4">
        <div className="card card-custom bg-light-danger card-stretch gutter-b">
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-danger">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Calculator.svg")}
              ></SVG>
            </span>
            <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
              {data?.data.data.sataProfits} {` EGP`}
            </span>
            <span className="font-weight-bold text-muted font-size-sm">
              <FormattedMessage id="DASHBOARD.COMMISSIONS" />
            </span>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="card card-custom bg-light-info card-stretch gutter-b">
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-info">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Dollar.svg")}
              ></SVG>
            </span>
            <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
              {data?.data.data.vendorsProfits} {` EGP`}
            </span>
            <span className="font-weight-bold text-muted font-size-sm">
              <FormattedMessage id="DASHBOARD.VENDORPROFITS" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfitsAndCommissions;
