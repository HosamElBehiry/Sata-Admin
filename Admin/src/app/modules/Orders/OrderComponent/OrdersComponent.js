import React from "react";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "./CardBody";
import { FormattedMessage } from "react-intl";
import { useFetchOrders } from "../../../private/Orders";
const OrdersComponent = () => {
  const { data, isLoading, isError, error } = useFetchOrders(false);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={<FormattedMessage id="TABLE.TITLE.ORDERS.ALL" />}
        title={<FormattedMessage id="TABLE.TITLE.ORDERS.INCLUDES" />}
      />
      <CardBody orders={data?.data.data} />
    </div>
  );
};

export default OrdersComponent;
