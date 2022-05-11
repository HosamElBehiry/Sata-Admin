import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { UserContext } from "./FormikChildren";
import DispLang from "../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";
function Account() {
  const data = useContext(UserContext);
  return (
    <div
      className={`tab-pane px-7 ${data === "Account" && "active"}`}
      id="kt_user_edit_tab_2"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10"> </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.FULLNAME" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="fullname"
                  />
                  <ErrorMessage name="fullname" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.EMAIL" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope-open-text"></i>
                    </span>
                  </div>
                  <Field
                    name="email"
                    className="form-control form-control-lg form-control-solid"
                  />
                </div>
                <ErrorMessage name="email" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.MOBILE" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="mobile"
                  />
                  <ErrorMessage name="mobile" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.PHONE" />
              </label>
              <div className="col-9">
                <div className="">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="telephone"
                  />
                  <ErrorMessage name="telephone" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.VENDOR.BALANCETYPE" />
              </label>
              <div className="col-9">
                <Field
                  as="select"
                  name="app_balance_type"
                  className="form-control form-control-lg form-control-solid"
                >
                  <option value={""}>
                    {DispLang ? "اخترطريقه التعامل" : "Select Balance Type"}
                  </option>
                  <option value={"fixed"}>
                    {DispLang ? "نظام ثابت " : "Fixed"}
                  </option>
                  <option value={"percentage"}>
                    {DispLang ? "النظام المئوى" : "Percentage"}
                  </option>
                </Field>
                <ErrorMessage name="app_balance_type" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.VENDOR.BALANCEAMOUNT" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <Field
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    name="app_balance_amount"
                  />
                </div>
                <ErrorMessage name="app_balance_amount" component={TextError} />
              </div>
            </div>{" "}
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.TAX.CARD.END.DATE" />
              </label>
              <div className="col-9 ">
                <div
                  className="input-group input-group-solid date"
                  id="kt_datetimepicker_3"
                  data-target-input="nearest"
                >
                  <Field
                    type="date"
                    className="form-control form-control-solid datetimepicker-input"
                    placeholder="Select date time"
                    data-target="#kt_datetimepicker_3"
                    name="taxcard_expiration"
                  />
                  <div
                    className="input-group-append"
                    data-target="#kt_datetimepicker_3"
                    data-toggle="datetimepicker"
                  >
                    <span className="input-group-text">
                      <i className="ki ki-calendar"></i>
                    </span>
                  </div>
                </div>
                <ErrorMessage name="taxcard_expiration" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.COMMERICAL.END.DATE" />
              </label>
              <div className="col-9 ">
                <div
                  className="input-group input-group-solid date"
                  id="kt_datetimepicker_3"
                  data-target-input="nearest"
                >
                  <Field
                    type="date"
                    className="form-control form-control-solid datetimepicker-input"
                    placeholder="Select date time"
                    data-target="#kt_datetimepicker_3"
                    name="commericalRecord_expiration"
                  />
                  <div
                    className="input-group-append"
                    data-target="#kt_datetimepicker_3"
                    data-toggle="datetimepicker"
                  >
                    <span className="input-group-text">
                      <i className="ki ki-calendar"></i>
                    </span>
                  </div>
                </div>
                <ErrorMessage
                  name="commericalRecord_expiration"
                  component={TextError}
                />
              </div>
            </div>
            {window.location.href.includes("/vendors/Update/") && (
              <>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="TABLE.CUSTOMER.STATUS" />
                  </label>
                  <div className="col-9">
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
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="TABLE.CUSTOMER.ISDELETED" />
                  </label>
                  <div className="col-9">
                    <span className="switch">
                      <label>
                        <Field type="checkbox" name="isDeleted" />
                        <span></span>
                      </label>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
