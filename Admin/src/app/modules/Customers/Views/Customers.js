import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { hookFetchByRole } from "../../../actions/customers/customerActions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Customers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchByRole("user"));
  }, [dispatch]);
  const data = useSelector((state) => state.users);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              title={<FormattedMessage id="TABLE.TITLE.CUSTOMER.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.CUSTOMER.ALL" />}
            />
            <Table {...{ users: data.users }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Customers;
