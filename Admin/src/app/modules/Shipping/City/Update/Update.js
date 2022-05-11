import { Formik } from "formik";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFindById,
  hookUpdateById,
} from "../../../../actions/shipping/city/cityActions";
import { hookFetchAll } from "../../../../actions/shipping/country/countryActions";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import { BeatLoader } from "react-spinners";
function Update({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFindById(match.params.id));
    dispatch(hookFetchAll());
  }, [dispatch, match]);
  const data = useSelector((state) => state.city);
  const cntData = useSelector((state) => state.country);
  if (data.loading || cntData.loading) {
    return <BeatLoader loading={data.loading || cntData.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data.city?._id,
      name_en: data.city?.city?.en,
      name_ar: data.city?.city?.ar,
      country: data.city?.country,
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.SHIPPING.CITY.FORM.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.SHIPPING.CITY.FORM.ADD" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => dispatch(hookUpdateById(values))}
          >
            {(formik) => (
              <FormikChildren {...{ formik, countries: cntData.countries }} />
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Update;
