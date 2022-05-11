import React, { useState } from "react";
import { Form, Field, ErrorMessage } from "formik";
import TextError from "../../../shared/TextError";
import { FormattedMessage } from "react-intl";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import SaveChanges from "../../../shared/SaveChanges";
function FormikChildren({ formik, country }) {
  const [isChanged, setIsChanged] = useState(false);
  const [countryLogo, setCountryLogo] = useState(country ? country.image : "");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setCountryLogo(reader.result);
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
                  countryLogo === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          `${process.env.REACT_APP_API_URL}/${countryLogo}`
                        )})`,
                      }
                    : {
                        backgroundImage: `url(${countryLogo})`,
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
              name="name_en"
              className="form-control form-control-lg form-control-solid"
            />
            <ErrorMessage name="name_en" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BANNERS.TITLE.ARABIC" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              name="name_ar"
              className="form-control form-control-lg form-control-solid"
            />
            <ErrorMessage name="name_ar" component={TextError} />
          </div>
        </div>
        <SaveChanges {...{ formik }} />
      </div>
    </Form>
  );
}

export default FormikChildren;
