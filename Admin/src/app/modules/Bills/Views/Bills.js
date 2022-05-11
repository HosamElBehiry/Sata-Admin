import React from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Bills() {
  const location = useLocation();
  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="card card-custom">
          <TableTopHeader
            title={<FormattedMessage id="TABLE.BILL.INCLUDES" />}
            heading={<FormattedMessage id="TABLE.BILL.TITLE" />}
          />
          <Table {...{ bills: location.bills }} />
        </div>
      </div>
    </div>
  );
}

export default Bills;
