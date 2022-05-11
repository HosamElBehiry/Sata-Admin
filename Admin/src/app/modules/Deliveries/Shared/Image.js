import React, { useContext, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { UserContext } from "./FormikChildren";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Image({ formik }) {
  const data = useContext(UserContext);
  const [userProfile, setUserProfile] = useState(formik.values.image);
  const [licence_front, setLicenceFront] = useState(
    formik.values.licence_front
  );
  const [licence_back, setLicenceBack] = useState(formik.values.licence_back);
  const [licenceCar_front, setLicenceCarFront] = useState(
    formik.values.licenceCar_front
  );
  const [licenceCar_back, setLicenceCarBack] = useState(
    formik.values.licenceCar_back
  );
  const [drugAnalysis, setDrugAnalysis] = useState(formik.values.drugAnalysis);
  const [isChanged, setIsChanged] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        setIsChanged(isChanged);
        if (i === 0) {
          setUserProfile(reader.result);
        } else if (i === 1) {
          setLicenceFront(reader.result);
        } else if (i === 2) {
          setLicenceBack(reader.result);
        } else if (i === 3) {
          setLicenceCarFront(reader.result);
        } else if (i === 4) {
          setLicenceCarBack(reader.result);
        } else {
          setDrugAnalysis(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div
      className={`tab-pane show px-7 ${data === "Profile" && "active"}`}
      id="kt_user_edit_tab_1"
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7 my-2">
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.VENDOR.AVATAR" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userProfile === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[0]
                    ? {
                        backgroundImage: `url(${userProfile})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${userProfile})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 0);
                      formik.setFieldValue("image", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="image" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="image" component={TextError} />
            </div>

            <label className="col-form-label col-3 text-lg-right text-right">
              <FormattedMessage id="TABLE.DELIVETY.DRUG.ANALYSIS" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  drugAnalysis === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[5]
                    ? {
                        backgroundImage: `url(${drugAnalysis})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${drugAnalysis})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="drugAnalysis"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 5);
                      formik.setFieldValue("drugAnalysis", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="drugAnalysis" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="drugAnalysis" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.DELIVETY.LICENCE.FRONT" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  licence_front === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[1]
                    ? {
                        backgroundImage: `url(${licence_front})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${licence_front})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licence_front"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 1);
                      formik.setFieldValue("licence_front", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="licence_front" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licence_front" component={TextError} />
            </div>
            <label className="col-form-label col-3 text-lg-right text-right">
              <FormattedMessage id="TABLE.DELIVETY.LICENCE.BACK" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  licence_back === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[2]
                    ? {
                        backgroundImage: `url(${licence_back})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${licence_back})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licence_back"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 2);
                      formik.setFieldValue("licence_back", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="licence_back" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licence_back" component={TextError} />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.DELIVETY.LICENCE.CAR.FRONT" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  licenceCar_front === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[3]
                    ? {
                        backgroundImage: `url(${licenceCar_front})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${licenceCar_front})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licenceCar_front"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 3);
                      formik.setFieldValue(
                        "licenceCar_front",
                        e.target.files[0]
                      );
                    }}
                  />
                  <Field type="hidden" name="licenceCar_front" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licenceCar_front" component={TextError} />
            </div>
            <label className="col-form-label col-3 text-lg-right text-right">
              <FormattedMessage id="TABLE.DELIVETY.LICENCE.CAR.BACK" />
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  licenceCar_back === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : isChanged[4]
                    ? {
                        backgroundImage: `url(${licenceCar_back})`,
                      }
                    : {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${licenceCar_back})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licenceCar_back"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 4);
                      formik.setFieldValue(
                        "licenceCar_back",
                        e.target.files[0]
                      );
                    }}
                  />
                  <Field type="hidden" name="licenceCar_back" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licenceCar_back" component={TextError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
