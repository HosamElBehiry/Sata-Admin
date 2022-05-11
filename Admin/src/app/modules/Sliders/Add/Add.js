import React from "react";
import { Formik } from "formik";
import { initialValues, sliderValidation } from "../Shared/FormikKeys";
import FormikChildren from "../Shared/FormikChildren";
import { useDispatch } from "react-redux";
import { hookAddNew } from "../../../actions/sliders/sliderActions";
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
              <FormattedMessage id="SLIDERS.TITLE.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.SLIDERS.ADD.INFO" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={sliderValidation}
          onSubmit={onSubmit}
        >
          {(formik) => <FormikChildren {...{ formik }} />}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
