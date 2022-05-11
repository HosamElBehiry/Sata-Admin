import React, { useEffect } from "react";
import { hookFetchOnline } from "../../../actions/customers/customerActions";
import { useDispatch, useSelector } from "react-redux";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
import Table from "./Table";
import { BeatLoader } from "react-spinners";
function Online() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchOnline("vendor"));
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
              title={<FormattedMessage id="TABLE.TITLE.VENDORS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.VENDORS.ONLINE" />}
            />
            <Table {...{ vendors: data.users }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Online;
