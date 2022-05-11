import React from "react";
import { Form, Field, ErrorMessage } from "formik";
import TextError from "../../../shared/TextError";
import DispLang from "../../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";
import SaveChanges from "../../../shared/SaveChanges";
import CustomSelect from "../../../shared/CustomSelect";

function FormikChildren({ formik, countries }) {
  const countryOptions = countries.map((c) => {
    return { label: DispLang ? c.country.ar : c.country.en, value: c._id };
  });
  return (
    <Form className="form">
      <div className="card-body">
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
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="MENU.SHIPPING.COUNTRY" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div>
              <Field
                name="country"
                options={countryOptions}
                component={CustomSelect}
                style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                placeholder={
                  DispLang
                    ? "اختر البلد التابعه لها هذه المدينه  "
                    : "Select Country ... "
                }
              />
            </div>
            <ErrorMessage name="country" component={TextError} />
          </div>
        </div>
        <SaveChanges {...{ formik }} />
      </div>
    </Form>
  );
}

export default FormikChildren;
