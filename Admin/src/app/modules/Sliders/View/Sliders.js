import React, { useEffect } from "react";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../actions/sliders/sliderActions";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";

function Sliders() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.sliders);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={<FormattedMessage id="SLIDERS.TITLE.INCLUDE" />}
          heading={<FormattedMessage id="SLIDERS.TITLE.INFO" />}
        />
        <Table sliders={data?.sliders} />
      </div>
    );
  }
}

export default Sliders;
