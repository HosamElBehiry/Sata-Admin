import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useGetOrderITemsByOrder } from "../shared/axiosFunctions";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { BeatLoader } from "react-spinners";
import CardBody from "./CardBody";
import { FormattedMessage } from "react-intl";
const OrderDetailComponent = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    error,
    data: orderDetail,
  } = useGetOrderITemsByOrder(id);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom gutter-b">
          <div className="card-body p-0">
            <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
              <div className="col-md-10">
                <div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                  <h1 className="display-4 font-weight-boldest mb-10">
                    <FormattedMessage id="TABLE.ORDERS.DETAIL" />
                  </h1>
                  <div className="d-flex flex-column align-items-md-end px-0">
                    <span className="mb-5">
                      <img
                        src={`${toAbsoluteUrl("/media/Sata/logo.png")}`}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="border-bottom w-100"></div>
                <div className="d-flex justify-content-between pt-6">
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mb-2">
                      <FormattedMessage id="TABLE.ORDERS.DATE" />
                    </span>
                    <span className="opacity-70">
                      {format(
                        new Date(orderDetail?.data.data[0].createdAt),
                        "MMM dd yyyy"
                      )}
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mb-2">
                      <FormattedMessage id="TABLE.ORDERS.NO" />
                    </span>
                    <span className="opacity-70">{id}</span>
                  </div>
                  <div className="d-flex flex-column flex-root">
                    <span className="font-weight-bolder mb-2">
                      <FormattedMessage id="TABLE.ORDERS.DELIVERD.TO" />
                    </span>
                    <span className="opacity-70">
                      {orderDetail?.data.data[0].customer.fullname}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {orderDetail?.data && (
              <CardBody orderDetail={orderDetail?.data.data} />
            )}
            <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
              <div className="col-md-10">
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bold invisible"
                    onClick={() => window.print()}
                  >
                    <FormattedMessage id="DOWNLOAD.AS.PDF" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary font-weight-bold"
                    onClick={() => window.print()}
                  >
                    <FormattedMessage id="TABLE.ORDERS.PRINT.DETAIL" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderDetailComponent;
