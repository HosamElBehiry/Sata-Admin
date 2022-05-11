import React from "react";
import { FormattedMessage } from "react-intl";
import TableTopHeader from "../shared/TableTopHeader";
import Table from "../Deliveries/Views/Table";
import { BeatLoader } from "react-spinners";
import { useFetchDeliveries } from "../../private/Delivery";
function Deliveries() {
  const { data, isLoading, isError, error } = useFetchDeliveries(true);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              title={<FormattedMessage id="TABLE.TITLE.DELIVERIES.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.DELIVERIES.ALL" />}
            />
            <Table {...{ deliveries: data?.data.data }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Deliveries;
