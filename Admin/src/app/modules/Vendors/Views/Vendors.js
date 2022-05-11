import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { hookFetchAll } from "../../../actions/vendors/vendorActions";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Vendors() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.vendors);
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
              title={<FormattedMessage id="TABLE.TITLE.VENDORS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.VENDORS.ALL" />}
            />
            <Table {...{ vendors: data.vendors }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Vendors;
