import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { hookAddNew } from "../../../../actions/subcategory/subcategoryActions";
import TextError from "../../../shared/TextError";
import * as Yup from "yup";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import SaveChanges from "../../../shared/SaveChanges";

function AddSubCategory({ match }) {
  const dispatch = useDispatch();
  const [isChanged, setIsChanged] = useState(false);
  const [subCatLogo, setSubCatLogo] = useState("");
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setSubCatLogo(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const validationSchema = Yup.object({
    image: Yup.string().required("Required !"),
    title_en: Yup.string().required("Required !"),
    title_ar: Yup.string().required("Required !"),
    category: Yup.string().required("Required !"),
  });
  const initialValues = {
    image: "",
    title_en: "",
    title_ar: "",
    category: match.params.id,
  };
  const onSubmit = (values, onSubmitProps) => {
    dispatch(hookAddNew(values));
    onSubmitProps.resetForm();
  };
  return (
    <div className="card card-custom">
      <div className="card-header">
        <h3 className="card-title">
          <FormattedMessage id="TABLE.TITLE.SUBCATEGORY.ADD" />
        </h3>
      </div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {(formik) => {
          return (
            <Form>
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
                          subCatLogo === ""
                            ? {
                                backgroundImage: `url(${toAbsoluteUrl(
                                  "/media/users/blank.png"
                                )})`,
                              }
                            : !isChanged
                            ? {
                                backgroundImage: `url(${toAbsoluteUrl(
                                  `${process.env.REACT_APP_API_URL}/${subCatLogo}`
                                )})`,
                              }
                            : {
                                backgroundImage: `url(${subCatLogo})`,
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
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="title_en"
                      id="example-text-input"
                    />
                    <ErrorMessage name="title_en" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.CATEGORY.TITLEARABIC" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="title_ar"
                      id="example-text-input"
                    />
                    <ErrorMessage name="title_en" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.BRANDS.CATEGORY" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="category"
                      id="example-text-input"
                      disabled
                    />
                    <ErrorMessage name="category" component={TextError} />
                  </div>
                </div>
              </div>
              <SaveChanges {...{ formik }} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddSubCategory;
