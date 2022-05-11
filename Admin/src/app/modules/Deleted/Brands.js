import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../shared/TableTopHeader";
import CardBody from "../Brands/BrandsComponent/CardBody";
import { useFetchBrands } from "../../private/Brand";

function Brands() {
  const { data, isLoading, isError, error } = useFetchBrands(true);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              title={<FormattedMessage id="TABLE.TITLE.BRANDS.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.BRANDS.ALL" />}
            />
            <CardBody brands={data?.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
