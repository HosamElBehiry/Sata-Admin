import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "../OrderComponent/CardBody";
import { useFetchByType } from "../shared/axiosFunctions";

function OrderType({ match }) {
  const { data, isLoading, isError, error } = useFetchByType(match.params.type);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          heading={
            <FormattedMessage
              id={`TABLE.ORDERS.TYPES.${String(
                match.params.type
              ).toUpperCase()}`}
            />
          }
          title={<FormattedMessage id="TABLE.TITLE.ORDERS.INCLUDES" />}
        />
        {data && <CardBody orders={data?.data.data} />}
      </div>
    );
}

export default OrderType;
