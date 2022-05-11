import React from "react";
import { FormattedMessage } from "react-intl";
import { useFetchVendors } from "../../private/Vendor";
import { BeatLoader } from "react-spinners";
import Table from "../Vendors/Views/Table";
import TableTopHeader from "../shared/TableTopHeader";

function Vendors() {
  const { data, isLoading, isError, error } = useFetchVendors(true);
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
              title={<FormattedMessage id="TABLE.TITLE.VENDORS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.VENDORS.ALL" />}
            />
            <Table vendors={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Vendors;
