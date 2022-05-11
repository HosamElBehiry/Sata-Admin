import React, { useContext, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { SettingContent } from "../Header";
import { FormikContext } from "../Parent";
import { ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Section1() {
  const data = useContext(SettingContent);
  const formik = useContext(FormikContext);
  const [isChanged, setIsChanged] = useState([false, false]);
  const [settingLogo, setSettingLogo] = useState(formik.values?.logo || "");
  const [favIcon, setFavIcon] = useState(formik.values?.favIcon || "");
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        setIsChanged(isChanged);
        if (i === 0) {
          setSettingLogo(reader.result);
        } else {
          setFavIcon(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div
      className={`tab-pane px-7 show ${data.current === "Images" && "active"}`}
      id="kt_user_edit_tab_1"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7 my-2">
          <div className="row">
            <label className="col-3"></label>
          </div>
          <div className="form-group row ml-17">
            <div className="d-flex justify-content-between">
              <label className="col-form-label col-2 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.LOGO" />
              </label>
              <div className="col-5">
                <div
                  className="image-input image-input-empty image-input-outline"
                  id="kt_user_edit_avatar"
                >
                  <div
                    className="image-input-wrapper"
                    style={
                      settingLogo === ""
                        ? {
                            backgroundImage: `url(${toAbsoluteUrl(
                              "/media/users/blank.png"
                            )})`,
                          }
                        : !isChanged[0]
                        ? {
                            backgroundImage: `url(${toAbsoluteUrl(
                              `${process.env.REACT_APP_API_URL}/${settingLogo}`
                            )})`,
                          }
                        : {
                            backgroundImage: `url(${settingLogo})`,
                          }
                    }
                  ></div>
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
                      name="logo"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        handleImage(e, 0);
                        formik.setFieldValue("logo", e.target.files[0]);
                      }}
                    />
                    <Field type="hidden" name="logo" />
                  </label>
                  <span
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="cancel"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Cancel avatar"
                  >
                    <i className="ki ki-bold-close icon-xs text-muted"></i>
                  </span>
                  <span
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="remove"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Remove avatar"
                  >
                    <i className="ki ki-bold-close icon-xs text-muted"></i>
                  </span>
                </div>
                <ErrorMessage name="logo" component={TextError} />
              </div>
              <label className="col-form-label col-2 text-lg-right text-left">
                <FormattedMessage id="TABLE.SETTINGS.FAVICON" />
              </label>
              <div className="col-5">
                <div
                  className="image-input image-input-empty image-input-outline"
                  id="kt_user_edit_avatar"
                >
                  <div
                    className="image-input-wrapper"
                    style={
                      favIcon === ""
                        ? {
                            backgroundImage: `url(${toAbsoluteUrl(
                              "/media/users/blank.png"
                            )})`,
                          }
                        : !isChanged[1]
                        ? {
                            backgroundImage: `url(${toAbsoluteUrl(
                              `${process.env.REACT_APP_API_URL}/${favIcon}`
                            )})`,
                          }
                        : {
                            backgroundImage: `url(${favIcon})`,
                          }
                    }
                  ></div>
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
                      name="favIcon"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        handleImage(e, 1);
                        formik.setFieldValue("favIcon", e.target.files[0]);
                      }}
                    />
                    <Field type="hidden" name="favIcon" />
                  </label>
                  <span
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="cancel"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Cancel avatar"
                  >
                    <i className="ki ki-bold-close icon-xs text-muted"></i>
                  </span>
                  <span
                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                    data-action="remove"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Remove avatar"
                  >
                    <i className="ki ki-bold-close icon-xs text-muted"></i>
                  </span>
                </div>
                <ErrorMessage name="favIcon" component={TextError} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
