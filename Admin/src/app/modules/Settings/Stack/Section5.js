import React, { useContext } from "react";
import { SettingContent } from "../Header";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Section5() {
  const data = useContext(SettingContent);
  return (
    <>
      <div
        className={`tab-pane px-7 ${data.current === "Descriptions" &&
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
                  <FormattedMessage id="TABLE.SETTINGS.DESCRIPTION.ENGLISH" />
                </label>
                <div className="col-9">
                  <div>
                    <Field
                      as="textarea"
                      className="form-control form-control-lg form-control-solid"
                      name="description_en"
                    />
                    <ErrorMessage name="description_en" component={TextError} />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.SETTINGS.DESCRIPTION.ARABIC" />
                </label>
                <div className="col-9">
                  <div>
                    <Field
                      as="textarea"
                      className="form-control form-control-lg form-control-solid"
                      name="description_ar"
                    />
                    <ErrorMessage name="description_ar" component={TextError} />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.SETTINGS.ABOUT.DESCRIPTION.ENGLISH" />
                </label>
                <div className="col-9">
                  <div>
                    <Field
                      as="textarea"
                      className="form-control form-control-lg form-control-solid"
                      name="about_description_en"
                    />
                    <ErrorMessage
                      name="about_description_en"
                      component={TextError}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.SETTINGS.ABOUT.DESCRIPTION.ARABIC" />
                </label>
                <div className="col-9">
                  <div>
                    <Field
                      as="textarea"
                      className="form-control form-control-lg form-control-solid"
                      name="about_description_ar"
                    />
                    <ErrorMessage
                      name="about_description_ar"
                      component={TextError}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-dashed my-10"></div>
      </div>
      {/*  */}
    </>
  );
}

export default Section5;
