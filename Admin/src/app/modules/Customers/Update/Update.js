import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationUpdate } from "../Shared/FormikKeys";
import Header from "../Shared/Header";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../actions/customers/customerActions";

function Update({ match }) {
  const [current, setCurrent] = useState("Profile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [match, dispatch]);
  const data = useSelector((state) => state.users);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data.user?._id,
      image: data.user?.image,
      fullname: data.user?.fullname,
      email: data.user?.email,
      role: "user",
      mobile: data.user?.mobile,
      telephone: data.user?.telephone,
      status: data.user?.status,
      isDeleted: data.user?.isDeleted,
      password: "",
      vpassword: "",
    };
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <Header {...{ current, setCurrent }} />
            <div className="card-body">
              <Formik
                initialValues={oldData || initialValues}
                validationSchema={validationUpdate}
                onSubmit={(values) => dispatch(hookUpdateById(values))}
                enableReinitialize
              >
                {(formik) => (
                  <Form className="form" id="kt_form">
                    <div className="tab-content">
                      <FormikChildren
                        {...{ current, formik, user: data.user }}
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
}

export default Update;
