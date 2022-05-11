import { Formik } from "formik";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import * as bnrActions from "../../../actions/banners/bannerActions";
import FormikChildren from "../Shared/FormikChildren";
import { bannerValidation, initialValues } from "../Shared/FormikKeys";

function Update({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bnrActions.hookFetchById(match.params.id));
  }, [dispatch, match]);
  const data = useSelector((state) => state.banners);
  const onSubmit = (values) => {
    dispatch(bnrActions.hookUpdateById(values));
  };
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: data?.banner?._id,
      image: data?.banner?.image,
      isActive: String(data?.banner?.isActive),
      title_en: data?.banner?.title?.en,
      title_ar: data?.banner?.title?.ar,
      showInHome: String(data?.banner?.showInHome),
      startDate: (data?.banner?.startDate.split("T"))[0],
      endDate: (data?.banner?.endDate.split("T"))[0],
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
                <FormattedMessage id="BANNERS.UPDATE.INCLUDES" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || initialValues}
            validationSchema={bannerValidation}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <FormikChildren formik={formik} banner={data?.banner} />
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default Update;
