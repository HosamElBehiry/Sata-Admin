import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues } from "../Shared/FormikKeys";
import Header from "../Shared/Header";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import { useFindById, useUpdateProduct } from "../../../private/Products";
const Update = ({ match }) => {
  const [current, setCurrent] = useState("Profile");
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useFindById(match.params.id);
  const { mutateAsync } = useUpdateProduct();
  const validationSchema = Yup.object({
    image: Yup.string().required("Required !"),
    title_en: Yup.string().required("Required !"),
    title_ar: Yup.string().required("Required !"),
    description_en: Yup.string().required("Required !"),
    description_ar: Yup.string().required("Required !"),
    price: Yup.string().required("Required !"),
    store: Yup.string().required("Required !"),
    size: Yup.array().required("Required !"),
    color: Yup.array().required("Required !"),
    categoryId: Yup.string().required("Required !"),
    subCategory: Yup.string().required("Required !"),
    brand: Yup.string().required("Required !"),
    ...(user.roles[0] === 1 && { vendor: Yup.string().required("Required !") }),
  });
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const oldData = {
      image: data?.data.data.albums
        .map((album) => {
          return { _id: album._id, image: album.image };
        })
        .concat({
          _id: data?.data.data.product._id,
          image: data?.data.data.product.image,
        }),
      id: data?.data.data.product._id,
      title_en: data?.data.data.product.title?.en,
      title_ar: data?.data.data.product.title?.ar,
      description_en: data?.data.data.product.description?.en,
      description_ar: data?.data.data.product.description?.ar,
      price: data?.data.data.product.price,
      store: data?.data.data.product.store,
      size: data?.data.data.product.size,
      color: data?.data.data.product.color,
      categoryId: data?.data.data.product.categoryId._id,
      subCategory: data?.data.data.product.subCategory._id,
      brand: data?.data.data.product.brand._id,
      vendor: data?.data.data.product.user._id,
    };
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <Header {...{ current, setCurrent }} />
            <div className="card-body">
              <Formik
                initialValues={oldData || initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={(values) => mutateAsync(values)}
              >
                {(formik) => {
                  return (
                    <Form className="form" id="kt_form">
                      <div className="tab-content">
                        <FormikChildren {...{ current, formik }} />
                        <SaveChanges {...{ formik }} />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Update;
