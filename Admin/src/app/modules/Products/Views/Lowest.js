import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import { useFindLowest } from "../../../private/Products";
import TableTopHeader from "../../shared/TableTopHeader";
import Table from "./Table";

function Lowest() {
  const { data, isLoading, isError, error } = useFindLowest();
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
              title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
              heading={
                <FormattedMessage id="TABLE.TITLE.PRODUCT.MINIMUM.ALL" />
              }
            />
            <Table products={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Lowest;
