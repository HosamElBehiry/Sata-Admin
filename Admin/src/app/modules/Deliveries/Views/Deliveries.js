import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../actions/deliveries/deliveryActions";
import { BeatLoader } from "react-spinners";
function Deliveries() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.deliveries);
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
              title={<FormattedMessage id="TABLE.TITLE.DELIVERIES.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.DELIVERIES.ALL" />}
            />
            <Table {...{ deliveries: data.deliveries }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Deliveries;
