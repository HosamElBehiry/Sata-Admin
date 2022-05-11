import React from "react";
import SVG from "react-inlinesvg";
import { FormattedMessage } from "react-intl";
import { useGetSataProfits } from "../../../../app/private/Reports";
import { toAbsoluteUrl } from "../../../_helpers";

function SataProfits() {
  const { data } = useGetSataProfits();
  return (
    <div className="col-xl-4">
      <div className="card card-custom bg-light-primary card-stretch gutter-b">
        <div className="card-body">
          <span className="svg-icon svg-icon-2x svg-icon-primary">
            <SVG
              src={toAbsoluteUrl(
                "/media/svg/icons/Navigation/Angle-double-up.svg"
              )}
            ></SVG>
          </span>
          <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
            {data?.data.data} {` EGP`}
          </span>
          <span className="font-weight-bold text-muted font-size-sm">
            <FormattedMessage id="DASHBOARD.SATA.PROFITS" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SataProfits;
