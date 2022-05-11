import React, { useEffect } from "react";
import TableTopHeader from "../../shared/TableTopHeader";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../actions/banners/bannerActions";
import { BeatLoader } from "react-spinners";
import Table from "./Table";
import { FormattedMessage } from "react-intl";

function Banners() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);

  const data = useSelector((state) => state.banners);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={<FormattedMessage id="TABLE.BANNERS.ALL.INCLUDES" />}
          heading={<FormattedMessage id="TABLE.BANNERS.ALL.INFO" />}
        />
        <Table banners={data.banners} />
      </div>
    );
  }
}

export default Banners;
