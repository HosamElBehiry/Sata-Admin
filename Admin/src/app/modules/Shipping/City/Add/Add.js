import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Formik } from "formik";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import FormikChildren from "../Shared/FormikChildren";
import { useDispatch, useSelector } from "react-redux";
import { hookAddNew } from "../../../../actions/shipping/city/cityActions";
import { hookFetchAll } from "../../../../actions/shipping/country/countryActions";

function Add() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const onSubmit = (values, onSubmitProps) => {
    dispatch(hookAddNew(values));
    onSubmitProps.resetForm();
  };
  const { countries } = useSelector((state) => state.country);
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom card-stretch">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.SHIPPING.CITY.FORM.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.SHIPPING.CITY.FORM.ADD" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => <FormikChildren {...{ formik, countries }} />}
        </Formik>
      </div>
    </div>
  );
}

export default Add;
