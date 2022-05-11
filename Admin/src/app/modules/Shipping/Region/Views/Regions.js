import React from "react";
import { BeatLoader } from "react-spinners";
import { useFetchRegions } from "../../../../private/Shipping";
import TableTopHeader from "../../../shared/TableTopHeader";
import Table from "./Table";
import { FormattedMessage } from "react-intl";
const Regions = () => {
  const { data, isLoading, isError, error } = useFetchRegions();
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
              heading={<FormattedMessage id="TABLE.SHIPPING.REGION.INFO" />}
              title={<FormattedMessage id="TABLE.SHIPPING.REGION.INCLUDES" />}
            />
            <Table regions={data?.data} />
          </div>
        </div>
      </div>
    );
  }
};

export default Regions;
