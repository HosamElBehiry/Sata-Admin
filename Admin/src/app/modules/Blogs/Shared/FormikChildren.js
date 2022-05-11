import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Form, Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import DispLang from "../../../../utils/HEADERS";
import SaveChanges from "../../shared/SaveChanges";

function FormikChildren({ formik, blog }) {
  const [isChanged, setIsChanged] = useState(false);
  const [blogImage, setBlogLogo] = useState(blog ? blog.image : "");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setBlogLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Form className="form">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="BLOG.IMAGE" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="image-input image-input-outline" id="kt_image_4">
              <div
                className="image-input-wrapper"
                style={
                  blogImage === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged
                    ? {
                        backgroundImage: `url(${process.env.REACT_APP_API_URL}/${blogImage})`,
                      }
                    : {
                        backgroundImage: `url(${blogImage})`,
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
                  accept=".png, .jpg, .jpeg, .webp"
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
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.EN" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <Field
                type="text"
                as="textarea"
                className="form-control form-control-lg form-control-solid"
                placeholder={
                  DispLang
                    ? "الوصف باللغه الانجليزيه"
                    : "Description in English"
                }
                name="description_en"
              />
            </div>
            <ErrorMessage name="description_en" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.AR" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <Field
                type="text"
                as="textarea"
                className="form-control form-control-lg form-control-solid"
                placeholder={
                  DispLang ? "الوصف باللغه العربيه" : "Description in Arabic"
                }
                name="description_ar"
              />
            </div>
            <ErrorMessage name="description_ar" component={TextError} />
          </div>
        </div>
      </div>
      <SaveChanges {...{ formik }} />
    </Form>
  );
}

export default FormikChildren;
