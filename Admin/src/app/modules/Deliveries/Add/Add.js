import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import { useAddDelivery } from "../../../private/Delivery";
import Header from "../Shared/Header";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { useDispatch, useSelector } from "react-redux";
import { FetchCompanyShipping } from "../../../actions/companyshipping/companyShippingActions";

function Add() {
  const [current, setCurrent] = useState("Profile");
  const { mutateAsync } = useAddDelivery();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCompanyShipping());
  }, [dispatch]);
  const result = useSelector((state) => state.companyShipping);
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
                    <FormikChildren
                      {...{ current, formik, companies: result }}
                    />
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
