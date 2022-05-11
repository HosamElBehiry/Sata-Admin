import React, { useContext } from "react";
import { SettingContent } from "../Header";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";

function Section2() {
  const data = useContext(SettingContent);
  return (
    <div
      className={`tab-pane px-7 ${data.current === "Title" && "active"}`}
      id="kt_user_edit_tab_2"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="title_en"
                  />
                  <ErrorMessage name="title_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.CATEGORY.TITLEARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="title_ar"
                  />
                  <ErrorMessage name="title_ar" component={TextError} />
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.META.TITLE.ENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="meta_title_en"
                  />
                  <ErrorMessage name="meta_title_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.META.TITLE.ARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="meta_title_ar"
                  />
                  <ErrorMessage name="meta_title_ar" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.ABOUT.TITLE.ENGLISH" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="about_title_en"
                  />
                  <ErrorMessage name="about_title_en" component={TextError} />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.ABOUT.TITLE.ARABIC" />
              </label>
              <div className="col-9">
                <div>
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    name="about_title_ar"
                  />
                  <ErrorMessage name="about_title_Ar" component={TextError} />
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

export default Section2;
