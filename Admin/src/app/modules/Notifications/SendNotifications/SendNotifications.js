import React from "react";
import { BeatLoader } from "react-spinners";
import { useSendNotification } from "../../../private/Notifications";
import { useFindAll } from "../../../private/User";
import { Formik, Form, ErrorMessage, Field } from "formik";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import { initialValues, validationSchema } from "./FormikKeys";
import CustomSelect from "../../shared/CustomSelect";
import Header from "./Header";
import DispLang from "../../../../utils/HEADERS";

function SendNotifications() {
  const { data, isLoading, isError, error } = useFindAll();
  const userOptions = data?.data.data.map((u) => {
    return { label: u.fullname, value: u._id };
  });
  const { mutateAsync } = useSendNotification();
  const onSubmit = (values, onSubmitProps) => {
    const error = "Fill At Least One !";
    let users = [];
    if (
      values.all.length === 0 &&
      values.customers.length === 0 &&
      values.vendors.length === 0 &&
      values.workers.length === 0 &&
      values.deliveries.length === 0
    ) {
      onSubmitProps.setErrors({
        all: error,
        customers: error,
        vendors: error,
        workers: error,
        deliveries: error,
      });
    } else {
      if (values.all.length > 0) {
        users = values.all;
      }
      if (values.customers.length > 0) {
        const customers = data.users
          .filter((c) => c.role === "user")
          .map((u) => u._id);
        users.push(customers);
      }
      if (values.vendors.length > 0) {
        const vendors = data.users
          .filter((c) => c.role === "vendor")
          .map((u) => u._id);
        users.push(vendors);
      }
      if (values.workers.length > 0) {
        const workers = data.users
          .filter((c) => c.role === "worker")
          .map((u) => u._id);
        users.push(workers);
      }
      if (values.deliveries.length > 0) {
        const deliveries = data.users
          .filter((c) => c.role === "delivery")
          .map((u) => u._id);
        users.push(deliveries);
      }
      mutateAsync({
        users,
        description_en: values.description_en,
        description_ar: values.description_ar,
      });
      onSubmitProps.resetForm();
    }
  };
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <Header />
            <div className="card card-custom gutter-b">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-label">
                    <FormattedMessage id="NOTIFICATION.TITLE.SEND" />
                  </h5>
                </div>
              </div>
              <Formik
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
              >
                {(formik) => {
                  return (
                    <Form className="form">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3"></div>
                          <div className="col-xl-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="INPUT.NOTIFICATION.MULTI.USERS" />
                              </label>
                              <Field
                                style={{
                                  marginBottom: "1rem",
                                  maxWidth: "20rem",
                                }}
                                name="all"
                                options={userOptions}
                                component={CustomSelect}
                                placeholder={
                                  DispLang
                                    ? `اختر مستخدم او عده مستخدمين`
                                    : "Select multi Users..."
                                }
                                isMulti={true}
                              />
                              <ErrorMessage name="all" component={TextError} />
                            </div>
                            <div className="form-group row">
                              <div
                                className="d-flex align-items-center justify-content-between"
                                style={{ marginLeft: "1rem" }}
                              >
                                <label style={{ paddingTop: "10px" }}>
                                  <FormattedMessage id="MENU.CUSTOMERS" />
                                </label>
                                <div className="p-2">
                                  <span className="switch switch-sm">
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="customers"
                                        value="usrValue"
                                      />
                                      <span></span>
                                    </label>
                                  </span>
                                  <ErrorMessage
                                    name="customers"
                                    component={TextError}
                                  />
                                </div>
                                <label style={{ paddingTop: "10px" }}>
                                  <FormattedMessage id="MENU.VENDORS" />
                                </label>
                                <div className="p-2">
                                  <span className="switch switch-sm">
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="vendors"
                                        value="VendValues"
                                      />
                                      <span></span>
                                    </label>
                                  </span>
                                  <ErrorMessage
                                    name="vendors"
                                    component={TextError}
                                  />
                                </div>
                                <label style={{ paddingTop: "10px" }}>
                                  <FormattedMessage id="MENU.WORKERS" />
                                </label>
                                <div className="p-2">
                                  <span className="switch switch-sm">
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="workers"
                                        value="WorkVal"
                                      />
                                      <span></span>
                                    </label>
                                  </span>
                                  <ErrorMessage
                                    name="workers"
                                    component={TextError}
                                  />
                                </div>
                                <label style={{ paddingTop: "10px" }}>
                                  <FormattedMessage id="MENU.DELIVERYBOYS" />
                                </label>
                                <div className="p-2">
                                  <span className="switch switch-sm">
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="deliveries"
                                        value="delivVal"
                                      />
                                      <span></span>
                                    </label>
                                  </span>
                                  <ErrorMessage
                                    name="deliveries"
                                    component={TextError}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleTextarea">
                                <FormattedMessage id="INPUT.NOTIFICATION.DESCRIPTION.EG" />
                              </label>
                              <Field
                                as="textarea"
                                className="form-control form-control-solid form-control-lg"
                                id="exampleTextarea"
                                name="description_en"
                                placeholder={
                                  DispLang
                                    ? `اكتب الرساله بالانجليزيه`
                                    : "Write Notification in English..."
                                }
                                rows="3"
                              ></Field>
                              <ErrorMessage
                                name="description_en"
                                component={TextError}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleTextarea">
                                <FormattedMessage id="INPUT.NOTIFICATION.DESCRIPTION.AR" />
                              </label>
                              <Field
                                as="textarea"
                                className="form-control form-control-solid form-control-lg"
                                id="exampleTextarea"
                                name="description_ar"
                                placeholder={
                                  DispLang
                                    ? `اكتب الرساله بالعريه`
                                    : "Write Notification in Arabic..."
                                }
                                rows="3"
                              ></Field>
                              <ErrorMessage
                                name="description_ar"
                                component={TextError}
                              />
                            </div>
                          </div>
                          <div className="col-xl-3"></div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row">
                          <div className="col-xl-3"></div>
                          <div className="col-xl-6">
                            <button
                              type="submit"
                              disabled={!formik.isValid || !formik.dirty}
                              className="btn btn-primary font-weight-bold mr-2"
                            >
                              <FormattedMessage id="BUTTON.ADD" />
                            </button>
                            <button
                              type="reset"
                              className="btn btn-clean font-weight-bold"
                            >
                              <FormattedMessage id="BUTTON.CANCEL" />
                            </button>
                          </div>
                          <div className="col-xl-3"></div>
                        </div>
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
}

export default SendNotifications;
