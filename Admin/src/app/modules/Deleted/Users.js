import React from "react";
import { FormattedMessage } from "react-intl";
import { useFindByRole } from "../../private/User";
import { BeatLoader } from "react-spinners";
import Table from "../Customers/Views/Table";
import TableTopHeader from "../shared/TableTopHeader";

function Users() {
  const { data, isLoading, isError, error } = useFindByRole("user", true, 1);
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
              title={<FormattedMessage id="TABLE.TITLE.CUSTOMER.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.CUSTOMER.ALL" />}
            />
            <Table users={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
