import React, { useContext } from "react";
import { SettingContent } from "../Header";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Section3() {
  const data = useContext(SettingContent);
  return (
    <div
      className={`tab-pane px-7 ${data.current === "Extras" && "active"}`}
      id="kt_user_edit_tab_2"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.ADDRESS.ENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="address_en"
                  />
                  <ErrorMessage name="address_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.ADDRESS.ARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="address_ar"
                  />
                  <ErrorMessage name="address_ar" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.MOBILE" />
              </label>
              <div className="col-9">
                <div>
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
                <FormattedMessage id="TABLE.SETTINGS.WORK.TIME" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="worktime"
                  />
                  <ErrorMessage name="worktime" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.MAP" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="map"
                  />
                  <ErrorMessage name="map" component={TextError} />
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

export default Section3;
