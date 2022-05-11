import React from "react";
import { Formik } from "formik";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationSchema } from "../Shared/FormikKeys";
import {
  useFetchRegionById,
  useUpdateRegion,
} from "../../../../private/Shipping";
import { BeatLoader } from "react-spinners";

const Update = ({ match }) => {
  const { data, isLoading, isError, error } = useFetchRegionById(
    match.params.id
  );
  const { mutateAsync } = useUpdateRegion();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const oldData = {
      id: data?.data._id,
      region_en: data?.data.region.en,
      region_ar: data?.data.region.ar,
      countryId: data?.data.countryId,
      cityId: data?.data.cityId,
      price: data?.data.price,
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                Account Information
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                Change your account settings
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => {
              mutateAsync(values);
            }}
          >
            {(formik) => <FormikChildren {...{ formik }} />}
          </Formik>
        </div>
      </div>
    );
  }
};

export default Update;
