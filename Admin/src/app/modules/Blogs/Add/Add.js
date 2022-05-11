import { Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import { hookAddNew } from "../../../actions/blogs/blogs";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, blogValidation } from "../Shared/FormikKeys";
import { useDispatch } from "react-redux";
function Add() {
  const dispatch = useDispatch();
  const onSubmit = (values, onSubmitProps) => {
    dispatch(hookAddNew(values));
    onSubmitProps.resetForm();
  };
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom card-stretch">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.BLOGS.ADD.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.BLOGS.ADD.INCLUDE" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={blogValidation}
          onSubmit={onSubmit}
        >
          {(formik) => <FormikChildren {...{ formik }} />}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
