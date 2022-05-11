import { Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { hookUpdate } from "../../../actions/blogs/blogs";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, blogValidation } from "../Shared/FormikKeys";

function Update() {
  const location = useLocation();
  const dispatch = useDispatch();
  const oldData = {
    id: location.blog._id,
    image: location.blog.image,
    title_en: location.blog.title?.en,
    title_ar: location.blog.title?.ar,
    description_en: location.blog.description?.en,
    description_ar: location.blog.description?.ar,
  };
  const onSubmit = (values) => {
    dispatch(hookUpdate(values));
  };
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom card-stretch">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="BANNERS.ADD.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.BLOGS.UPDATE.INCLUDE" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={oldData || initialValues}
          validationSchema={blogValidation}
          onSubmit={onSubmit}
        >
          {(formik) => <FormikChildren formik={formik} blog={location.blog} />}
        </Formik>
      </div>
    </div>
  );
}

export default Update;
