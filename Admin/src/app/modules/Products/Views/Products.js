import React from "react";
import { useFindAll } from "../../../private/Products";
import Table from "./Table";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
function Products() {
  // انا هنا عامل الشرط ده عشان البائع ممكن
  // يدخل يشوف المنتجات فيشوف المنتجات الخاصه بيه هو بس
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, error, data } = useFindAll(false, user.roles[0]);
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
              heading={<FormattedMessage id="TABLE.TITLE.PRODUCT.ALL" />}
            />
            <Table
              products={user.roles[0] === 1 ? data?.data.data : data?.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
