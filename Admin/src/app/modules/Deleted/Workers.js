import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import Table from "../Workers/Views/Table";
import TableTopHeader from "../shared/TableTopHeader";
import { useFetchWorkers } from "../../private/Worker";

function Workers() {
  const { data, isLoading, isError, error } = useFetchWorkers(true);
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
              title={<FormattedMessage id="TABLE.TITLE.WORKERS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.WORKERS.ALL" />}
            />
            <Table workers={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Workers;
