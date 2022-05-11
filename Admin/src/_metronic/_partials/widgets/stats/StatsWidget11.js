/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
// import React from "react";
// import SVG from "react-inlinesvg";
// import { toAbsoluteUrl } from "../../../_helpers";

// export function StatsWidget11({ className }) {
//   return (
//     <div className={`card-body ${className}`}>
//       <span className="svg-icon svg-icon-2x svg-icon-danger">
//         <SVG
//           src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")}
//         ></SVG>
//       </span>
//       <span className="font-weight-bold text-muted font-size-sm d-block">
//         New Customers
//       </span>
//       <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 ">
//         2,044
//       </span>
//     </div>
//   );
// }

import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import Displang from "../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";

export function StatsWidget11({ className, symbolShape, baseColor, data }) {
  return (
    <div className={`card card-custom ${className}`}>
      {data ? (
        <div className="card-body p-0">
          <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
            <span
              className={`symbol ${symbolShape} symbol-50 symbol-light-${baseColor} mr-2`}
            >
              <span className="symbol-label">
                <span className={`svg-icon svg-icon-xl svg-icon-${baseColor}`}>
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Layout/Layout-4-blocks.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </span>
            <div className="d-flex flex-column text-right">
              <span className="text-dark-75 font-weight-bolder font-size-h3">
                {Displang ? data.title.ar : data.title.en} : {data.price} EGP
              </span>
              <span className="text-muted font-weight-bold mt-2">
                {Displang
                  ? "تم بيعها عدد " + data.bought + " مره "
                  : "Bought: " + data.bought + " Times"}
              </span>
            </div>
          </div>

          <div
            id="kt_stats_widget_11_chart"
            className="card-rounded-bottom"
            style={{ height: "150px" }}
          >
            <img
              src={`${process.env.REACT_APP_API_URL}/${data.image}`}
              alt=""
              height={"180px"}
              width={"100%"}
            />
          </div>
        </div>
      ) : (
        <h1>
          <FormattedMessage id="EMPTY" />
        </h1>
      )}
    </div>
  );
}
