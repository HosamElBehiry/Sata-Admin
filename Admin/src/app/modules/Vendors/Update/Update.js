import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationUpdate } from "../Shared/FormikKeys";
import Header from "../Shared/Header";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFetchByUsrId,
  hookUpdateByUsrId,
} from "../../../actions/vendors/vendorActions";

function Update({ match }) {
  const [current, setCurrent] = useState("Profile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchByUsrId(match.params.id));
  }, [match, dispatch]);
  const data = useSelector((state) => state.vendors);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data.vendor?.user?._id,
      image: data.vendor?.user?.image,
      fullname: data.vendor?.user?.fullname,
      email: data.vendor?.user?.email,
      role: "vendor",
      mobile: data.vendor?.user?.mobile,
      telephone: data.vendor?.user?.telephone,
      status: data.vendor?.user?.status,
      isDeleted: data.vendor?.user?.isDeleted,
      taxcard_front: data.vendor?.taxcard_front,
      taxcard_back: data.vendor?.taxcard_back,
      commercialRecord: data.vendor?.commercialRecord,
      taxcard_expiration: translateDate(data.vendor?.taxcard_expiration),
      commericalRecord_expiration: translateDate(
        data.vendor?.commericalRecord_expiration
      ),
      app_balance_type: data.vendor?.app_balance_type,
      app_balance_amount: data.vendor?.app_balance_amount,
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
                onSubmit={(values) => dispatch(hookUpdateByUsrId(values))}
                enableReinitialize
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
}

function translateDate(data) {
  const newData = new Date(data);
  const month =
    newData.getMonth() + 1 <= "9"
      ? `0${newData.getMonth() + 1}`
      : newData.getMonth() + 1;
  const day =
    newData.getDate() <= "9" ? `0${newData.getDate()}` : newData.getDate();
  const year = newData.getFullYear();
  return String(year + "-" + month + "-" + day);
}

export default Update;
