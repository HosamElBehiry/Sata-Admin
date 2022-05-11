// دى بتعرض كل المنتجات اللى ليها نفس العلامه التجاريه

import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import { useFindByBrandId } from "../../../private/Products";
import Table from "../../Products/Views/Table";
import TableTopHeader from "../../shared/TableTopHeader";

function Products({ match }) {
  const { isLoading, isError, error, data } = useFindByBrandId(match.params.id);
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
              heading={<FormattedMessage id="TABLE.TITLE.PRODUCT.BRAND.ALL" />}
            />
            <Table products={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
