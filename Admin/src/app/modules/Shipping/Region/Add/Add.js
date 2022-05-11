import React from "react";
import FormikChildren from "../Shared/FormikChildren";
import { Formik } from "formik";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import { useAddNewRegion } from "../../../../private/Shipping";
import { FormattedMessage } from "react-intl";

const Add = () => {
  const { mutateAsync } = useAddNewRegion();
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.SHIPPING.REGION.FORM.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.SHIPPING.REGION.FORM.ADD" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, onSubmitProps) => {
            mutateAsync(values);
            onSubmitProps.resetForm();
          }}
        >
          {(formik) => <FormikChildren {...{ formik }} />}
        </Formik>
      </div>
    </div>
  );
};

export default Add;
