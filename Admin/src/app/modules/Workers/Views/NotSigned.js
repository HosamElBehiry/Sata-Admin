import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { hookFetchNotSigned } from "../../../actions/customers/customerActions";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";
function NotSigned({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchNotSigned(match.params.days, "worker"));
  }, [dispatch, match]);
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
              title={<FormattedMessage id="TABLE.TITLE.WORKERS.INCLUDES" />}
              heading={
                <FormattedMessage
                  id={
                    match.params.days === "7"
                      ? `TABLE.TITLE.WORKERS.NOTJOINED7DAYS`
                      : `TABLE.TITLE.WORKERS.NOTJOINED30DAYS`
                  }
                />
              }
            />
            <Table {...{ workers: data.users }} />
          </div>
        </div>
      </div>
    );
  }
}

export default NotSigned;
