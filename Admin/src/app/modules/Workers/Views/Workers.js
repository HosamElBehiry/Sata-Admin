import React, { useEffect, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../actions/workers/workerActions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Workers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.workers);
  const workers = useMemo(() => data.workers, [data.workers]);
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
              title={<FormattedMessage id="TABLE.TITLE.WORKERS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.WORKERS.ALL" />}
            />
            <Table {...{ workers }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Workers;
