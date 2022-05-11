import { Form, Formik } from "formik";
import React, { useState } from "react";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import Header from "../Shared/Header";
import { useAddVendor } from "../../../private/Vendor";

function Add() {
  const [current, setCurrent] = useState("Profile");
  const { mutateAsync } = useAddVendor();
  const onSubmit = (values, onSubmitProps) => {
    mutateAsync(values);
    onSubmitProps.resetForm();
  };
  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="card card-custom">
          <Header {...{ current, setCurrent }} />
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form className="form" id="kt_form">
                  <div className="tab-content">
                    <FormikChildren {...{ current, formik }} />
                    <SaveChanges {...{ formik }} />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
