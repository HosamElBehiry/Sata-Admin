import React, { useState } from "react";
import { Form, Field, ErrorMessage } from "formik";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import SaveChanges from "../../shared/SaveChanges";

function FormikChildren({ formik, slider }) {
  const [isChanged, setIsChanged] = useState(false);
  const [sliderLogo, setSlidetLogo] = useState(slider ? slider.image : "");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setSlidetLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Form className="form">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.CATEGORY.IMAGE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div
              className="image-input image-input-outline"
              id="kt_profile_avatar"
              style={{
                backgroundImage: `url(${toAbsoluteUrl(
                  "/media/users/blank.png"
                )})`,
              }}
            >
              <div
                className="image-input-wrapper"
                style={
                  sliderLogo === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          `${process.env.REACT_APP_API_URL}/${sliderLogo}`
                        )})`,
                      }
                    : {
                        backgroundImage: `url(${sliderLogo})`,
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
                  name="profile_avatar"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => {
                    handleImage(e);
                    formik.setFieldValue("image", e.target.files[0]);
                  }}
                />
                <Field type="hidden" name="image" />
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              className="form-control form-control-lg form-control-solid"
              name="title_en"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.CATEGORY.TITLEARABIC" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              className="form-control form-control-lg form-control-solid"
              name="title_ar"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.SLIDERS.ISACTIVE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="radio-inline">
              <label className="radio">
                <Field type="radio" name="isActive" value={"true"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.SHOW" />
              </label>
              <label className="radio">
                <Field type="radio" name="isActive" value={"false"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.HIDE" />
              </label>
            </div>
            <ErrorMessage name="isActive" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.SLIDERS.ISMOBILE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="radio-inline">
              <label className="radio">
                <Field type="radio" name="isMobile" value={"true"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.SHOW" />
              </label>
              <label className="radio">
                <Field type="radio" name="isMobile" value={"false"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.HIDE" />
              </label>
            </div>
            <ErrorMessage name="isMobile" component={TextError} />
          </div>
        </div>
      </div>
      <SaveChanges {...{ formik }} />
    </Form>
  );
}

export default FormikChildren;
