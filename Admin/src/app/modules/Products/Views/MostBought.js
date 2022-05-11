import React from "react";
import Table from "./Table";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import { useFindMostBought } from "../../../private/Products";
import TableTopHeader from "../../shared/TableTopHeader";

function MostBought() {
  const { isLoading, isError, error, data } = useFindMostBought();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    console.log(data?.data);
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
              heading={
                <FormattedMessage id="TABLE.TITLE.PRODUCT.MOST.BOUGHT.ALL" />
              }
            />
            <Table products={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default MostBought;
