import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../actions/companyshipping/companyShippingActions";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "../shared/FormikKeys";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import SaveChanges from "../../shared/SaveChanges";
import DispLang from "../../../../utils/HEADERS";
const UpdateCompanyShipping = ({ match }) => {
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setBrandLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [dispatch, match]);
  const data = useSelector((state) => state.companyShipping);
  const [brandLogo, setBrandLogo] = useState(
    data.company ? data.company.logo : ""
  );
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const savedData = {
      id: match.params.id,
      name: data.company ? data.company.name : "",
      email: data.company ? data.company.email : "",
      address: data.company ? data.company.address : "",
      telephone: data.company ? data.company.telephone : "",
      mobile: data.company ? data.company.mobile : "",
      status: data.company ? data.company.status : "",
      logo: data.company ? data.company.logo : "",
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.COMPANY.SHIPPING.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.COMPANY.SHIPPING.INCLUDE" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={savedData || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="form">
                  <div className="card-body">
                    <div className="row">
                      <label className="col-xl-3"></label>
                      <div className="col-lg-9 col-xl-6">
                        <h5 className="font-weight-bold mb-6">
                          <FormattedMessage id="TABLE.COMPANY.SHIPPING.INFO" />
                        </h5>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.BANNERS.IMAGE" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <div
                          className="image-input image-input-outline"
                          id="kt_profile_avatar"
                        >
                          {data.company && (
                            <div
                              className="image-input-wrapper"
                              style={
                                !isChanged
                                  ? {
                                      backgroundImage: `url(${toAbsoluteUrl(
                                        `${process.env.REACT_APP_API_URL}/${formik.values.logo}`
                                      )})`,
                                    }
                                  : {
                                      backgroundImage: `url(${brandLogo})`,
                                    }
                              }
                            ></div>
                          )}
                          <label
                            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                            data-action="change"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Change avatar"
                          >
                            <i className="fa fa-pen icon-sm text-muted"></i>
                            <input
                              type="file"
                              name="profile_avatar"
                              accept=".png, .jpg, .jpeg"
                              onChange={(e) => {
                                handleImage(e);
                                formik.setFieldValue("logo", e.target.files[0]);
                              }}
                            />
                            <Field type="hidden" name="logo" />
                          </label>
                        </div>
                      </div>
                      <ErrorMessage name="logo" component={TextError} />
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.CUSTOMER.FULLNAME" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="name" />
                        <ErrorMessage name="name" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.CUSTOMER.EMAIL" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="email" />
                        <ErrorMessage name="email" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.CUSTOMER.MOBILE" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="mobile" />
                        <ErrorMessage name="mobile" component={TextError} />
                      </div>
                    </div>
                    {/* <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.CUSTOMER.STATUS" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="status" />
                        <ErrorMessage name="status" component={TextError} />
                      </div>
                    </div> */}
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.PRODUCT.STATUS" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          as="select"
                          className="form-control form-control-lg form-control-solid"
                          name="status"
                        >
                          <option value={""}>
                            {DispLang
                              ? "اختر من الحالات الاتيه "
                              : "Select State ..."}
                          </option>
                          <option value={"Pending"}>
                            {DispLang ? "معلق" : "Pending"}
                          </option>
                          <option value={"Confirmed"}>
                            {DispLang ? "مؤكد" : "Confirmed"}
                          </option>
                          <option value={"Blocked"}>
                            {DispLang ? "محظور " : "Blocked"}
                          </option>
                        </Field>
                        <ErrorMessage name="status" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.CUSTOMER.PHONE" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="telephone" />
                        <ErrorMessage name="telephone" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.ORDERS.ADDRESS" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field className="form-control" name="address" />
                        <ErrorMessage name="address" component={TextError} />
                      </div>
                    </div>
                    <SaveChanges {...{ formik }} />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  }
};

export default UpdateCompanyShipping;
