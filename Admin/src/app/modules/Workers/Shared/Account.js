import React, { useContext } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { UserContext } from "./FormikChildren";
import DispLang from "../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";
import CustomSelect from "../../shared/CustomSelect";
import { useSelector } from "react-redux";

function Account({ vendors }) {
  const data = useContext(UserContext);
  const { user } = useSelector((state) => state.auth);
  const options =
    !!vendors &&
    vendors.map((v) => {
      return { value: v._id, label: v.fullname };
    });
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
            {user.roles[0] === 1 && (
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.WORKERS.VENDOR" />
                </label>
                <div className="col-9">
                  <div className="">
                    <Field
                      options={options}
                      component={CustomSelect}
                      name="vendor"
                      placeholder={
                        DispLang ? `اختر البائع الخاص به` : `Select Vendor`
                      }
                    />
                    <ErrorMessage name="vendor" component={TextError} />
                  </div>
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.CAN.ADD" />
              </label>
              <div className="col-lg-9 col-xl-6">
                <div className="col-9 col-form-label">
                  <div className="radio-inline">
                    <label className="radio radio-primary">
                      <Field type="radio" name="canAdd" value={"true"} />
                      <span></span>
                      <FormattedMessage id="INPUT.TRUE" />
                    </label>
                    <label className="radio radio-primary">
                      <Field type="radio" name="canAdd" value={"false"} />
                      <span></span>
                      <FormattedMessage id="INPUT.FALSE" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.CAN.UPDATE" />
              </label>
              <div className="col-lg-9 col-xl-6">
                <div className="col-9 col-form-label">
                  <div className="radio-inline">
                    <label className="radio radio-primary">
                      <Field type="radio" name="canUpdate" value={"true"} />
                      <span></span>
                      <FormattedMessage id="INPUT.TRUE" />
                    </label>
                    <label className="radio radio-primary">
                      <Field type="radio" name="canUpdate" value={"false"} />
                      <span></span>
                      <FormattedMessage id="INPUT.FALSE" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.CAN.DELETE" />
              </label>
              <div className="col-lg-9 col-xl-6">
                <div className="col-9 col-form-label">
                  <div className="radio-inline">
                    <label className="radio radio-primary">
                      <Field value={"true"} type="radio" name="canDelete" />
                      <span></span>
                      <FormattedMessage id="INPUT.TRUE" />
                    </label>
                    <label className="radio radio-primary">
                      <Field value={"false"} type="radio" name="canDelete" />
                      <span></span>
                      <FormattedMessage id="INPUT.FALSE" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {window.location.href.includes("/workers/Update/") && (
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
