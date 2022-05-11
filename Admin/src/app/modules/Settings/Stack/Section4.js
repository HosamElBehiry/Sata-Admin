import React, { useContext } from "react";
import { SettingContent } from "../Header";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Section4() {
  const data = useContext(SettingContent);
  return (
    <div
      className={`tab-pane px-7 ${data.current === "Terms && Conditions" &&
        "active"}`}
      id="kt_user_edit_tab_2"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.TERMS.CONDITION.ENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="term_conditons_en"
                  />
                  <ErrorMessage
                    name="term_conditons_en"
                    component={TextError}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.TERMS.CONDITION.ARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="term_conditons_ar"
                  />
                  <ErrorMessage
                    name="term_conditons_ar"
                    component={TextError}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.PRIVACY.POLICY.ENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="privacy_policy_en"
                  />
                  <ErrorMessage
                    name="privacy_policy_ar"
                    component={TextError}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.PRIVACY.POLICY.ARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="privacy_policy_ar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-dashed my-10"></div>
    </div>
  );
}

export default Section4;
