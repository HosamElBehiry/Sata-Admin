import React from "react";
import { FormattedMessage } from "react-intl";
import { Form, Formik, Field } from "formik";
import { vendInitialValues } from "../Shared/FormikKeys";
import { useFetchByUsrId, useUpdateByVendor } from "../../../private/Worker";
import { BeatLoader } from "react-spinners";
import SaveChanges from "../../shared/SaveChanges";

const UpdateByVendor = ({ match }) => {
  const { data, isLoading, isError, error } = useFetchByUsrId(match.params.id);
  const { mutateAsync } = useUpdateByVendor();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const oldData = {
      id: data?.data.data._id,
      canAdd: String(data?.data.data.canAdd),
      canUpdate: String(data?.data.data.canUpdate),
      canDelete: String(data?.data.data.canDelete),
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.WORKERS.UPDATE.TITLE" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.WORKERS.UPDATE.INFO" />
              </span>
            </div>
          </div>
          <Formik
            initialValues={oldData || vendInitialValues}
            enableReinitialize
            onSubmit={(values) => mutateAsync(values)}
          >
            {(formik) => (
              <Form className="form">
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.ROLE.CAN.ADD" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-primary">
                            <Field type="radio" name="canAdd" value={"true"} />
                            <span></span>
                            <FormattedMessage id="INPUT.TRUE" />
                          </label>
                          <label className="radio radio-primary">
                            <Field type="radio" name="canAdd" value={"false"} />
                            <span></span>
                            <FormattedMessage id="INPUT.FALSE" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.ROLE.CAN.UPDATE" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-primary">
                            <Field
                              type="radio"
                              name="canUpdate"
                              value={"true"}
                            />
                            <span></span>
                            <FormattedMessage id="INPUT.TRUE" />
                          </label>
                          <label className="radio radio-primary">
                            <Field
                              type="radio"
                              name="canUpdate"
                              value={"false"}
                            />
                            <span></span>
                            <FormattedMessage id="INPUT.FALSE" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.ROLE.CAN.DELETE" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-primary">
                            <Field
                              value={"true"}
                              type="radio"
                              name="canDelete"
                            />
                            <span></span>
                            <FormattedMessage id="INPUT.TRUE" />
                          </label>
                          <label className="radio radio-primary">
                            <Field
                              value={"false"}
                              type="radio"
                              name="canDelete"
                            />
                            <span></span>
                            <FormattedMessage id="INPUT.FALSE" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SaveChanges {...{ formik }} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
};

export default UpdateByVendor;
