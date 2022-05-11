import React from "react";
import { useFilterByPayment } from "../../../../app/private/Reports";
import { toAbsoluteUrl } from "../../../_helpers";
import SVG from "react-inlinesvg";
import { FormattedMessage } from "react-intl";
function PaymentWithMoneyAndBockets() {
  const { data } = useFilterByPayment();
  return (
    <>
      <div className="col-xl-6">
        <div className="card card-custom bg-dark card-stretch gutter-b">
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-info">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Money.svg")}
              ></SVG>
            </span>
            <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">
              {data?.data.data.price_with_money} {` EGP`}
            </span>
            <span className="font-weight-bold text-muted font-size-sm">
              <FormattedMessage id="DASHBOARD.PAYMENT.WITH.CASH" />
            </span>
          </div>
        </div>
      </div>

      <div className="col-xl-6">
        <div className="card card-custom bg-info card-stretch gutter-b">
          <div className="card-body">
            <span className="svg-icon svg-icon-2x svg-icon-white">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet2.svg")}
              ></SVG>
            </span>
            <span className="card-title font-weight-bolder text-white font-size-h2 mb-0 mt-6 d-block">
              {data?.data.data.price_with_bocket} {` EGP`}
            </span>
            <span className="font-weight-bold text-white font-size-sm">
              <FormattedMessage id="DASHBOARD.PAYMENT.WITH.BOCKET" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentWithMoneyAndBockets;
