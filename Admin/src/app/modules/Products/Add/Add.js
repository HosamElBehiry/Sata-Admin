import React, { useState } from "react";
import { Formik, Form } from "formik";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import Header from "../Shared/Header";
import { initialValues } from "../Shared/FormikKeys";
import { useAddNew } from "../../../private/Products";
import * as Yup from "yup";
import { useSelector } from "react-redux";

function Add() {
  const [current, setCurrent] = useState("Profile");
  const { mutateAsync } = useAddNew();
  const onSubmit = (values) => {
    mutateAsync(values);
  };
  const { user } = useSelector((state) => state.auth);
  const validationSchema = Yup.object({
    image: Yup.string().required("Required !"),
    title_en: Yup.string().required("Required !"),
    title_ar: Yup.string().required("Required !"),
    description_en: Yup.string().required("Required !"),
    description_ar: Yup.string().required("Required !"),
    price: Yup.string().required("Required !"),
    store: Yup.string().required("Required !"),
    size: Yup.array().required("Required !"),
    color: Yup.array().required("Required !"),
    categoryId: Yup.string().required("Required !"),
    subCategory: Yup.string().required("Required !"),
    brand: Yup.string().required("Required !"),
    ...(user.roles[0] === 1 && { vendor: Yup.string().required("Required !") }),
  });
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
