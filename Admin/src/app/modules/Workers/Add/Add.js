import React, { useState } from "react";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import Header from "../Shared/Header";
import { Formik, Form } from "formik";
import { initialValues } from "../Shared/FormikKeys";
import { useAddWorker } from "../../../private/Worker";
import { useSelector } from "react-redux";
import { useFindByRole } from "../../../private/User";
import * as Yup from "yup";
function Add() {
  const [current, setCurrent] = useState("Profile");
  const { user } = useSelector((state) => state.auth);
  const { data } = useFindByRole("vendor", false, user.roles[0]);
  const validationSchema = Yup.object({
    image: Yup.string().required("Required !"),
    fullname: Yup.string().required("Required !"),
    email: Yup.string()
      .required("Required !")
      .email("Email is not valid !"),
    mobile: Yup.string().required("Required !"),
    telephone: Yup.string().required("Required !"),
    password: Yup.string().required("Required !"),
    vpassword: Yup.string()
      .required("Required !")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
    canAdd: Yup.string().required("Required !"),
    canUpdate: Yup.string().required("Required !"),
    canDelete: Yup.string().required("Required !"),
    ...(user.roles[0] === 1 && { vendor: Yup.string().required("Required !") }),
  });
  const { mutateAsync } = useAddWorker();
  const onSubmit = (values, onSubmitProps) => {
    // عشان لو اللى ضايف العامل الرول بتاعته بائع يحط الاى دى بتاعه اللى فى جدول اليوزر
    if (values.vendor === "") {
      values.vendor = user._id;
    }
    mutateAsync(values, user.roles[0]);
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
              {(formik) => {
                return (
                  <Form className="form" id="kt_form">
                    <div className="tab-content">
                      <FormikChildren
                        {...{ current, formik, vendors: data?.data.data }}
                      />
                      <SaveChanges {...{ formik }} />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
