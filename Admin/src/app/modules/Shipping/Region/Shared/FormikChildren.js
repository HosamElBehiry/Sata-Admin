import React, { useState } from "react";
import { Form, Field, ErrorMessage } from "formik";
import {
  useFetchCountries,
  useFetchCities,
} from "../../../../private/Shipping";
import DispLang from "../../../../../utils/HEADERS";
import TextError from "../../../shared/TextError";
import SaveChanges from "../../../shared/SaveChanges";
import { FormattedMessage } from "react-intl";

const FormikChildren = ({ formik }) => {
  const [country, setCountry] = useState(formik.values.countryId || "");
  const { data: countries } = useFetchCountries();
  const { data: cities } = useFetchCities(country);
  return (
    <Form className="form">
      <div className="card-body">
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.SHIPPING.REGION.REGION.EN" />{" "}
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="">
              <Field
                className="form-control form-control-lg form-control-solid"
                name="region_en"
              />
            </div>
            <ErrorMessage name="region_en" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.SHIPPING.REGION.REGION.AR" />{" "}
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="">
              <Field
                className="form-control form-control-lg form-control-solid"
                name="region_ar"
              />
            </div>
            <ErrorMessage name="region_ar" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="TABLE.SHIPPING.REGION.PRICE" />{" "}
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="">
              <Field
                className="form-control form-control-lg form-control-solid"
                name="price"
              />
            </div>
            <ErrorMessage name="price" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            {" "}
            <FormattedMessage id="TABLE.SHIPPING.REGION.COUNTRY" />{" "}
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              name="countryId"
              as="select"
              className="form-control form-control-lg form-control-solid"
              onChange={(e) => {
                formik.setFieldValue("countryId", e.target.value);
                setCountry(e.target.value);
              }}
            >
              <option value="">
                {DispLang ? `إختر البلد` : `Select Country`}
              </option>
              {countries?.data.data.map((country) => (
                <option key={country._id} value={country._id}>
                  {DispLang ? country.country.ar : country.country.en}
                </option>
              ))}
            </Field>
            <ErrorMessage name="countryId" component={TextError} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            {" "}
            <FormattedMessage id="TABLE.SHIPPING.REGION.CITY" />{" "}
          </label>
          <div className="col-lg-9 col-xl-6">
            <Field
              as="select"
              name="cityId"
              className="form-control form-control-lg form-control-solid"
            >
              <option>{DispLang ? `إختر المديتة ` : `Select City`}</option>
              {cities?.data.data.map((city) => (
                <option key={city._id} value={city._id}>
                  {DispLang ? city.city.ar : city.city.en}
                </option>
              ))}
            </Field>
            <ErrorMessage name="cityId" component={TextError} />
          </div>
        </div>
        <SaveChanges {...{ formik }} />
      </div>
    </Form>
  );
};

export default FormikChildren;
