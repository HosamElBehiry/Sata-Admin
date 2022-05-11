import React, { useContext, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { UserContext } from "./FormikChildren";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
function Image({ formik, user }) {
  const data = useContext(UserContext);
  const [isChanged, setIsChanged] = useState(false);
  const [userImage, setImage] = useState(user ? user.image : "");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setImage(reader.result);
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
          <div className="row">
            <label className="col-3"></label>
            <div className="col-9">
              <h6 className="text-dark font-weight-bold mb-10"> </h6>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.PROFILE" />
            </label>
            <div className="col-9">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={{
                  backgroundImage: `url('')`,
                }}
              >
                <div
                  className="image-input-wrapper"
                  style={
                    userImage === ""
                      ? {
                          backgroundImage: `url(${toAbsoluteUrl(
                            "/media/users/blank.png"
                          )})`,
                        }
                      : !isChanged
                      ? {
                          backgroundImage: `url(${toAbsoluteUrl(
                            `${process.env.REACT_APP_API_URL}/${userImage}`
                          )})`,
                        }
                      : {
                          backgroundImage: `url(${userImage})`,
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
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e);
                      formik.setFieldValue("image", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="image" />
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
              <ErrorMessage name="image" component={TextError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
