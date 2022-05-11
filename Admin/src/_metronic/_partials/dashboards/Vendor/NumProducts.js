import React from "react";
import { FormattedMessage } from "react-intl";
import { useFindAll } from "../../../../app/private/Products";

const NumProducts = () => {
  const { data } = useFindAll(false, 2);
  return (
    <div className="card-body">
      <span className="svg-icon svg-icon-2x svg-icon-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24"></rect>
            <rect
              fill="#000000"
              opacity="0.3"
              x="13"
              y="4"
              width="3"
              height="16"
              rx="1.5"
            ></rect>
            <rect
              fill="#000000"
              x="8"
              y="9"
              width="3"
              height="11"
              rx="1.5"
            ></rect>
            <rect
              fill="#000000"
              x="18"
              y="11"
              width="3"
              height="9"
              rx="1.5"
            ></rect>
            <rect
              fill="#000000"
              x="3"
              y="13"
              width="3"
              height="7"
              rx="1.5"
            ></rect>
          </g>
        </svg>
      </span>
      <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">
        {data?.data.length}
      </span>
      <span className="font-weight-bold text-white font-size-sm">
        <FormattedMessage id="DASHBOARD.VENDOR.NUM.PRODUCTS" />
      </span>
    </div>
  );
};

export default NumProducts;
