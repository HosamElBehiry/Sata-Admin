import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFindById,
  hookUpdateById,
} from "../../../../actions/shipping/country/countryActions";
import { BeatLoader } from "react-spinners";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import { Formik } from "formik";
import FormikChildren from "../Shared/FormikChildren";
import { FormattedMessage } from "react-intl";

function Update({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFindById(match.params.id));
  }, [dispatch, match]);
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  const data = useSelector((state) => state.country);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data.country?._id,
      name_en: data.country?.country?.en,
      name_ar: data.country?.country?.ar,
      image: data.country?.image,
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.SHIPPING.COUNTRY.FORM.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.SHIPPING.COUNTRY.FORM.UPDATE" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => (
              <FormikChildren {...{ formik, country: data.country }} />
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Update;
