import React, { useEffect } from "react";
import TextError from "../../../shared/TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "../FormikKeys";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../../actions/contact/contactActions";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";

const Update = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [dispatch, match]);
  const data = useSelector((state) => state.contact);
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const savedData = {
      id: data.contact._id,
      name: data.contact.name,
      subject: data.contact.subject,
      email: data.contact.email,
      message: data.contact.message,
    };
    return (
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.CONTACT.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.CONTACT.UPDATE" />
            </span>
          </div>
        </div>
        <Formik
          validationSchema={validationSchema}
          initialValues={savedData || initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <Form className="form">
              <div className="card-body">
                <div className="form-group">
                  <label>
                    <FormattedMessage id="TABLE.CONTACTS.ID" />
                  </label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="id"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="TABLE.CONTACTS.NAME" />
                  </label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="name"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="TABLE.CONTACTS.EMAIL" />
                  </label>
                  <Field
                    type="email"
                    className="form-control form-control-lg col-9"
                    name="email"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="form-group">
                  <label>
                    <FormattedMessage id="TABLE.CONTACTS.SUBJECT" />
                  </label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="subject"
                  />
                  <ErrorMessage name="subject" component={TextError} />
                </div>
                <div className="form-group mb-1">
                  <label htmlFor="exampleTextarea">
                    <FormattedMessage id="TABLE.CONTACTS.MESSAGE" />{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <Field
                    as="textarea"
                    className="form-control col-9"
                    id="exampleTextarea"
                    rows="3"
                    name="message"
                  ></Field>
                  <ErrorMessage name="message" component={TextError} />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mr-2">
                  <FormattedMessage id="BUTTON.SAVECHANGES" />
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={() => history.goBack()}
                >
                  <FormattedMessage id="BUTTON.CANCEL" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default Update;
