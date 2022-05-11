/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
// import React, { useMemo, useEffect } from "react";
// import objectPath from "object-path";
// import ApexCharts from "apexcharts";
// import SVG from "react-inlinesvg";
// import { useHtmlClassService } from "../../../layout";
// import { toAbsoluteUrl } from "../../../_helpers";

// export function StatsWidget12({ className }) {
//   const uiService = useHtmlClassService();
//   const layoutProps = useMemo(() => {
//     return {
//       colorsGrayGray500: objectPath.get(
//         uiService.config,
//         "js.colors.gray.gray500"
//       ),
//       colorsGrayGray200: objectPath.get(
//         uiService.config,
//         "js.colors.gray.gray200"
//       ),
//       colorsGrayGray300: objectPath.get(
//         uiService.config,
//         "js.colors.gray.gray300"
//       ),
//       colorsThemeBasePrimary: objectPath.get(
//         uiService.config,
//         "js.colors.theme.base.primary"
//       ),
//       colorsThemeLightPrimary: objectPath.get(
//         uiService.config,
//         "js.colors.theme.light.primary"
//       ),
//       fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
//     };
//   }, [uiService]);

//   useEffect(() => {
//     const element = document.getElementById("kt_stats_widget_12_chart");

//     if (!element) {
//       return;
//     }

//     const options = getChartOption(layoutProps);
//     const chartnewUsers = new ApexCharts(element, options);
//     chartnewUsers.render();
//     return function cleanUp() {
//       chartnewUsers.destroy();
//     };
//   }, [layoutProps]);

//   return (
// <div className={`card card-custom ${className}`}>
//   <div className="card-body d-flex flex-column p-0">
//     <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
//       <span className="symbol symbol-circle symbol-50 symbol-light-primary mr-2">
//         <span className="symbol-label">
//           <span className="svg-icon svg-icon-xl svg-icon-primary">
//             <SVG
//               src={toAbsoluteUrl(
//                 "/media/svg/icons/Communication/Group.svg"
//               )}
//             ></SVG>
//           </span>
//         </span>
//       </span>
//       <div className="d-flex flex-column text-right">
//         <span className="text-dark-75 font-weight-bolder font-size-h3">
//           +6,5K
//         </span>
//         <span className="text-muted font-weight-bold mt-2">New Users</span>
//       </div>
//     </div>
//     <div
//       id="kt_stats_widget_12_chart"
//       className="card-rounded-bottom"
//       style={{ height: "150px" }}
//     ></div>
//   </div>
// </div>
//     <div className={`card-body ${className}`}>
//       <span className="svg-icon svg-icon-2x svg-icon-warning">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           width="24px"
//           height="24px"
//           viewBox="0 0 24 24"
//           version="1.1"
//         >
//           <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//             <rect x="0" y="0" width="24" height="24"></rect>
//             <path
//               d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
//               fill="#000000"
//             ></path>
//             <path
//               d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
//               fill="#000000"
//               opacity="0.3"
//             ></path>
//           </g>
//         </svg>
//       </span>
//       <span className="card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block">
//         23,508
//       </span>
//       <span className="font-weight-bold text-muted font-size-sm">23,508</span>
//     </div>
//   );
// }

// function getChartOption(layoutProps) {
//   var options = {
//     series: [
//       {
//         name: "Net Profit",
//         data: [40, 40, 30, 30, 35, 35, 50],
//       },
//     ],
//     chart: {
//       type: "area",
//       height: 150,
//       toolbar: {
//         show: false,
//       },
//       zoom: {
//         enabled: false,
//       },
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {},
//     legend: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     fill: {
//       type: "solid",
//       opacity: 1,
//     },
//     stroke: {
//       curve: "smooth",
//       show: true,
//       width: 3,
//       colors: [layoutProps.colorsThemeBasePrimary],
//     },
//     xaxis: {
//       categories: ["Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep"],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//       labels: {
//         show: false,
//         style: {
//           colors: layoutProps.colorsGrayGray500,
//           fontSize: "12px",
//           fontFamily: layoutProps.fontFamily,
//         },
//       },
//       crosshairs: {
//         show: false,
//         position: "front",
//         stroke: {
//           color: layoutProps.colorsGrayGray300,
//           width: 1,
//           dashArray: 3,
//         },
//       },
//       tooltip: {
//         enabled: true,
//         formatter: undefined,
//         offsetY: 0,
//         style: {
//           fontSize: "12px",
//           fontFamily: layoutProps.fontFamily,
//         },
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 55,
//       labels: {
//         show: false,
//         style: {
//           colors: layoutProps.colorsGrayGray500,
//           fontSize: "12px",
//           fontFamily: layoutProps.fontFamily,
//         },
//       },
//     },
//     states: {
//       normal: {
//         filter: {
//           type: "none",
//           value: 0,
//         },
//       },
//       hover: {
//         filter: {
//           type: "none",
//           value: 0,
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: "none",
//           value: 0,
//         },
//       },
//     },
//     tooltip: {
//       style: {
//         fontSize: "12px",
//         fontFamily: layoutProps.fontFamily,
//       },
//       y: {
//         formatter: function(val) {
//           return "$" + val + " thousands";
//         },
//       },
//     },
//     colors: [layoutProps.colorsThemeLightPrimary],
//     markers: {
//       colors: [layoutProps.colorsThemeLightPrimary],
//       strokeColor: [layoutProps.colorsThemeBasePrimary],
//       strokeWidth: 3,
//     },
//   };
//   return options;
// }

import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import DispLang from "../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";

export function StatsWidget12({ className, data }) {
  return (
    <div className={`card card-custom ${className}`}>
      {data ? (
        <div className="card-body d-flex flex-column p-0">
          <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
            <span className="symbol symbol-circle symbol-50 symbol-light-primary mr-2">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                  <SVG
                    src={toAbsoluteUrl(
                      "/media/svg/icons/Communication/Group.svg"
                    )}
                  ></SVG>
                </span>
              </span>
            </span>
            <div className="d-flex flex-column text-right">
              <span className="text-dark-75 font-weight-bolder font-size-h3">
                {DispLang ? data.title.ar : data.title.en}
              </span>
              <span className="text-muted font-weight-bold mt-2">
                {DispLang
                  ? "تم مشاهدتها بواسطه " + data.visitedBy.length + " شخص "
                  : "Watched By : " + data.visitedBy.length + " Persons"}
              </span>
            </div>
          </div>
          <div
            id="kt_stats_widget_12_chart"
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
