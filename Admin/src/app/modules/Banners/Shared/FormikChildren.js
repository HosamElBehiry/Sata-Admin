import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Form, Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import SaveChanges from "../../shared/SaveChanges";

function FormikChildren({ formik, banner }) {
  const [isChanged, setIsChanged] = useState(false);
  const [bannerLogo, setBannerLogo] = useState(banner ? banner.image : "");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setBannerLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Form className="form">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.IMAGE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div
              className="image-input image-input-outline"
              id="kt_image_4"
              style={{
                backgroundImage: `url('')`,
              }}
            >
              <div
                className="image-input-wrapper"
                style={
                  bannerLogo === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          `${process.env.REACT_APP_API_URL}/${bannerLogo}`
                        )})`,
                      }
                    : {
                        backgroundImage: `url(${bannerLogo})`,
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
                title="Cancel avatar"
              >
                <i className="ki ki-bold-close icon-xs text-muted"></i>
              </span>
            </div>
            <ErrorMessage name="image" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.ENGLISH" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              className="form-control form-control-lg form-control-solid"
              name="title_en"
            />
            <ErrorMessage name="title_en" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.ARABIC" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              className="form-control form-control-lg form-control-solid"
              name="title_ar"
            />
            <ErrorMessage name="title_ar" component={TextError} />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.START.DATE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div
              className="input-group input-group-solid date"
              id="kt_datetimepicker_3"
              data-target-input="nearest"
            >
              <Field
                type="date"
                className="form-control form-control-solid datetimepicker-input"
                data-target="#kt_datetimepicker_3"
                name="startDate"
              />
              <div
                className="input-group-append"
                data-target="#kt_datetimepicker_3"
                data-toggle="datetimepicker"
              >
                <span className="input-group-text">
                  <i className="ki ki-calendar"></i>
                </span>
              </div>
            </div>
            <ErrorMessage name="startDate" component={TextError} />
          </div>
        </div>

        <div className="form-group row align-items-center">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.END.DATE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div
              className="input-group input-group-solid date"
              id="kt_datetimepicker_3"
              data-target-input="nearest"
            >
              <Field
                type="date"
                className="form-control form-control-solid datetimepicker-input"
                data-target="#kt_datetimepicker_3"
                name="endDate"
              />
              <div
                className="input-group-append"
                data-target="#kt_datetimepicker_3"
                data-toggle="datetimepicker"
              >
                <span className="input-group-text">
                  <i className="ki ki-calendar"></i>
                </span>
              </div>
            </div>
            <ErrorMessage name="endDate" component={TextError} />
          </div>
        </div>
        <div className="form-group row align-items-center">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.ACTIVE" />
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
        <div className="form-group row align-items-center">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.SHOW.MENU" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="radio-inline">
              <label className="radio">
                <Field type="radio" name="showInHome" value={"true"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.SHOW" />
              </label>
              <label className="radio">
                <Field type="radio" name="showInHome" value={"false"} />
                <span></span>
                <FormattedMessage id="INPUT.CATEGORY.HIDE" />
              </label>
            </div>
            <ErrorMessage name="showInHome" component={TextError} />
          </div>
        </div>
      </div>
      <SaveChanges {...{ formik }} />
    </Form>
  );
}

export default FormikChildren;
