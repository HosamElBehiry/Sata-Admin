import React, { useContext } from "react";
import { UserContext } from "./FormikChildren";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";

function Password() {
  const data = useContext(UserContext);
  return (
    <div
      className={`tab-pane px-7 ${data === "Password" && "active"}`}
      id="kt_user_edit_tab_3"
      role="tabpanel"
    >
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2"></div>
          <div className="col-xl-7">
            <div className="row">
              <label className="col-3"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10"> </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.NEWPASSWORD" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.VERIFYPASSWORD" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  name="vpassword"
                  type="password"
                />
                <ErrorMessage name="vpassword" component={TextError} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
