import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import SaveChanges from "../../shared/SaveChanges";
import FormikChildren from "../Shared/FormikChildren";
import { initialValues, validationUpdate } from "../Shared/FormikKeys";
import Header from "../Shared/Header";
import { BeatLoader } from "react-spinners";
import { useFetchByUsrId, useUpdateWorker } from "../../../private/Worker";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchByRole } from "../../../actions/customers/customerActions";

function Update({ match }) {
  const [current, setCurrent] = useState("Profile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchByRole("vendor"));
  }, [dispatch]);
  const vendors = useSelector((state) => state.users);
  const { isLoading, isError, error, data } = useFetchByUsrId(match.params.id);
  const { mutateAsync } = useUpdateWorker();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const oldData = {
      id: data?.data.data.user?._id,
      image: data?.data.data.user?.image,
      fullname: data?.data.data.user?.fullname,
      email: data?.data.data.user?.email,
      role: "worker",
      mobile: data?.data.data.user?.mobile,
      telephone: data?.data.data.user?.telephone,
      status: data?.data.data.user?.status,
      isDeleted: data?.data.data.user?.isDeleted,
      password: "",
      vpassword: "",
      canAdd: String(data?.data.data.canAdd),
      canUpdate: String(data?.data.data.canUpdate),
      canDelete: String(data?.data.data.canDelete),
      vendor: data?.data.data.vendor?.user?._id,
    };
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <Header {...{ current, setCurrent }} />
            <div className="card-body">
              <Formik
                initialValues={oldData || initialValues}
                validationSchema={validationUpdate}
                onSubmit={(values) => mutateAsync(values)}
                enableReinitialize
              >
                {(formik) => (
                  <Form className="form" id="kt_form">
                    <div className="tab-content">
                      <FormikChildren
                        {...{ current, formik, vendors: vendors.users }}
                      />
                      <SaveChanges {...{ formik }} />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
