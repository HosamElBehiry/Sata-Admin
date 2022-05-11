import React from "react";
import { initialValues, bannerValidation } from "../Shared/FormikKeys";
import { Formik } from "formik";
import FormikChildren from "../Shared/FormikChildren";
import { hookAddNew } from "../../../actions/banners/bannerActions";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

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
              <FormattedMessage id="BANNERS.ADD.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="BANNERS.ADD.INCLUDES" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={bannerValidation}
          onSubmit={onSubmit}
        >
          {(formik) => <FormikChildren {...{ formik }} />}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
