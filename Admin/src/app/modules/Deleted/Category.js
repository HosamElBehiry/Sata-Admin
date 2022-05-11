import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../shared/TableTopHeader";
import { useFindAll } from "../../private/Category";
import CardBody from "../Category/shared/CardBody";

function Category() {
  const { data, isLoading, isError, error } = useFindAll(true);
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
              heading={<FormattedMessage id="TABLE.TITLE.CATEGORY.ALL" />}
              title={<FormattedMessage id="TABLE.TITLE.CATEGORY.INCLUDES" />}
            />
            <CardBody allCategories={data?.data.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
