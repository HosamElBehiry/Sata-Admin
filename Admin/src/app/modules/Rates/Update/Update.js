import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import SaveChanges from "../../shared/SaveChanges";
import { initialValues, validationSchema } from "./FormikKeys";
import { FormattedMessage } from "react-intl";
import DispLang from "../../../../utils/HEADERS";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hookUpdate } from "../../../actions/rates/rateActions";

function Update() {
  const location = useLocation();
  const dispatch = useDispatch();
  const oldDate = {
    id: location.rate._id,
    rate: location.rate.rate,
    status: location.rate.status,
    comment: location.rate.comment,
  };
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.RATES.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.RATES.INFO.UPDATE" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={oldDate || initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => dispatch(hookUpdate(values))}
        >
          {(formik) => (
            <Form className="form">
              <div className="card-body">
                <div className="row">
                  <label className="col-xl-3"></label>
                  <div className="col-lg-9 col-xl-6">
                    <h5 className="font-weight-bold mb-6">{` `}</h5>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                    <FormattedMessage id="TABLE.RATES.RATE" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        name="rate"
                      />
                      <ErrorMessage name="rate" component={TextError} />
                    </div>
                  </div>
                </div>
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
                    <FormattedMessage id="TABLE.RATES.COMMENT" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        as="textarea"
                        className="form-control form-control-lg form-control-solid"
                        name="comment"
                      />
                      <ErrorMessage name="comment" component={TextError} />
                    </div>
                  </div>
                </div>

                <SaveChanges {...{ formik }} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Update;
