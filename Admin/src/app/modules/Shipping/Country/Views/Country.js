import React, { useEffect } from "react";
import { hookFetchAll } from "../../../../actions/shipping/country/countryActions";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import TableTopHeader from "../../../shared/TableTopHeader";
import { BeatLoader } from "react-spinners";
import Table from "./Table";

const CountryForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.country);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <TableTopHeader
          heading={<FormattedMessage id="TABLE.SHIPPING.COUNTRY.INFO" />}
          title={<FormattedMessage id="TABLE.SHIPPING.COUNTRY.INCLUDES" />}
        />
        <div className="card-body">
          <Table countries={data.countries} />
        </div>
      </div>
    );
  }
};

export default CountryForm;
