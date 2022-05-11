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
} from "../../../actions/deliveries/deliveryActions";
import { FetchCompanyShipping } from "../../../actions/companyshipping/companyShippingActions";

function Update({ match }) {
  const [current, setCurrent] = useState("Profile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchByUsrId(match.params.id));
    dispatch(FetchCompanyShipping());
  }, [match, dispatch]);
  const data = useSelector((state) => state.deliveries);
  const result = useSelector((state) => state.companyShipping);
  if (data.loading || data.delivery === null) {
    return <BeatLoader loading={data.loading || data.delivery === null} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data.delivery?.user?._id,
      image: data.delivery?.user?.image,
      fullname: data.delivery?.user?.fullname,
      email: data.delivery?.user?.email,
      role: "delivery",
      mobile: data.delivery?.user?.mobile,
      telephone: data.delivery?.user?.telephone,
      status: data.delivery?.user?.status,
      isDeleted: data.delivery?.user?.isDeleted,
      licence_front: data.delivery?.licence_front,
      licence_back: data.delivery?.licence_back,
      licenceCar_front: data.delivery?.licenceCar_front,
      licenceCar_back: data.delivery?.licenceCar_back,
      drugAnalysis: data.delivery?.drugAnalysis,
      company: data.delivery?.company?._id,
      licence_expiration: translateDate(data.delivery?.licence_expiration),
      licenceCar_expiration: translateDate(
        data.delivery?.licenceCar_expiration
      ),
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
                      <FormikChildren
                        {...{ current, formik, companies: result }}
                        //
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
