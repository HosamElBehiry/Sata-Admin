import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { hookFetchNews } from "../../../actions/customers/customerActions";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function News({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchNews(match.params.days, "user"));
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
              title={<FormattedMessage id="TABLE.TITLE.CUSTOMER.INCLUDES" />}
              heading={
                <FormattedMessage
                  id={
                    match.params.days === "3"
                      ? `TABLE.TITLE.CUSTOMER.NEWS`
                      : match.params.days === "7"
                      ? `TABLE.TITLE.CUSTOMER.JOINED7DAYS`
                      : `TABLE.TITLE.CUSTOMER.JOINED30DAYS`
                  }
                />
              }
            />
            <Table {...{ users: data.users }} />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
