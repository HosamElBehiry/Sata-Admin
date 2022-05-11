import React from "react";
import { useFindAll } from "../../private/Products";
import Table from "../Products/Views/Table";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
function Products() {
  const { isLoading, isError, error, data, isFetching } = useFindAll(true, 1);
  if (isLoading || isFetching) {
    return <BeatLoader loading={isLoading || isFetching} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
              heading={<FormattedMessage id="TABLE.TITLE.PRODUCT.ALL" />}
            />
            <Table products={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
