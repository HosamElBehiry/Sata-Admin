import React, { useEffect } from "react";
import { hookFetchAll } from "../../../actions/blogs/blogs";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
function Blogs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.blogs);
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
              title={<FormattedMessage id="TABLE.BLOGS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.BLOGS.INFO" />}
            />
            <Table blogs={data.blogs} />
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
