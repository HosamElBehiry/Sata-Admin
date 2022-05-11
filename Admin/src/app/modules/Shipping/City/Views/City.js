import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import TableTopHeader from "../../../shared/TableTopHeader";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../../actions/shipping/city/cityActions";
import { BeatLoader } from "react-spinners";
function City() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.city);
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
              heading={<FormattedMessage id="TABLE.SHIPPING.CITY.INFO" />}
              title={<FormattedMessage id="TABLE.SHIPPING.CITY.INCLUDES" />}
            />
            <div className="card-body">
              <Table {...{ cities: data.cities }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
