import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { hookFilter } from "../../../actions/rates/rateActions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Rates({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFilter(match.params.type));
  }, [dispatch, match]);
  const data = useSelector((state) => state.rates);
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
              title={<FormattedMessage id="TABLE.RATES.INFO.INCLUDES" />}
              heading={
                <FormattedMessage
                  id={`TABLE.RATES.${String(
                    match.params.type
                  ).toUpperCase()}.TITLE`}
                />
              }
            />
            <Table rates={data.rates} />
          </div>
        </div>
      </div>
    );
  }
}

export default Rates;
