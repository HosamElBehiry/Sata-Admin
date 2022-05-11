import { Formik } from "formik";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  hookGetById,
  hookUpdateById,
} from "../../../actions/sliders/sliderActions";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, sliderValidation } from "../Shared/FormikKeys";

function Update({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookGetById(match.params.id));
  }, [dispatch, match]);
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  const data = useSelector((state) => state.sliders);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data?.slider?._id,
      title_en: data?.slider?.title?.en,
      title_ar: data?.slider?.title?.ar,
      image: data?.slider?.image,
      isActive: String(data?.slider?.isActive),
      isMobile: String(data?.slider?.isMobile),
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="SLIDERS.TITLE.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.SLIDERS.UPDATE.INFO" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || initialValues}
            validationSchema={sliderValidation}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => (
              <FormikChildren formik={formik} slider={data?.slider} />
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Update;
