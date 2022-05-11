import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Form, Field, ErrorMessage } from "formik";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import TextError from "../../shared/TextError";
import DispLang from "../../../../utils/HEADERS";
import SaveChanges from "../../shared/SaveChanges";
import { useFindAll } from "../../../private/Category";

const FormikInputs = ({ formik, brand }) => {
  const [isChanged, setIsChanged] = useState(false);
  const [brandLogo, setBrandLogo] = useState(brand ? brand.image : "");
  const { data: categories } = useFindAll(false);
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setBrandLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Form className="form">
      <div className="card-body">
        <div className="row mb-3">
          <label className="col-xl-3">
            <FormattedMessage id="INPUT.BRANDS.IMAGE" />
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
                  brandLogo === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          `${process.env.REACT_APP_API_URL}/${brandLogo}`
                        )})`,
                      }
                    : {
                        backgroundImage: `url(${brandLogo})`,
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
            <FormattedMessage id="INPUT.BRANDS.TITLEEN" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div>
              <Field
                className="form-control form-control-lg form-control-solid"
                type="text"
                name="title_en"
              />
            </div>
            <ErrorMessage name="title_en" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.BRANDS.TITLEAR" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div>
              <Field
                className="form-control form-control-lg form-control-solid"
                type="text"
                name="title_ar"
              />
            </div>
            <ErrorMessage name="title_ar" component={TextError} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="INPUT.BRANDS.CATEGORY" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <Field
                as="select"
                className="form-control form-control-lg form-control-solid"
                name="category"
              >
                <option value={""}>
                  {DispLang ? `اختر القسم التابع له` : `Select Category`}
                </option>
                {categories?.data.data.map((c) => (
                  <option key={c._id} value={c._id}>
                    {DispLang ? c.title.ar : c.title.en}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="category" component={TextError} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.CUSTOMER.ISDELETED" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <span className="switch">
              <label>
                <Field type="checkbox" name="isDeleted" />
                <span></span>
              </label>
            </span>
          </div>
        </div>

        <SaveChanges {...{ formik }} />
      </div>
    </Form>
  );
};

export default FormikInputs;
