import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormattedMessage } from "react-intl";
import { useGenerateBill } from "../../../../app/private/Reports";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import SaveChanges from "../../../../app/modules/shared/SaveChanges";
import BillsNotPaid from "./BillsNotPaid";
import DueBills from "./DueBills";
import PaymentWithMoneyAndBockets from "./PaymentWithMoneyAndBockets";
import ProfitsAndCommissions from "./ProfitsAndCommissions";
import TotalPayments from "./TotalPayments";
import TextError from "../../../../app/modules/shared/TextError";
import SataProfits from "./SataProfits";
const Admin = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data } = useGenerateBill(startDate, endDate);
  const initialValues = {
    start: "",
    end: "",
  };
  const validationSchema = Yup.object({
    start: Yup.date().required("Required !"),
    end: Yup.date().required("Required !"),
  });
  return (
    <div className="card card-custom p-6">
      <div className="row">
        <TotalPayments />
        <ProfitsAndCommissions />
      </div>

      <div className="row">
        <PaymentWithMoneyAndBockets />
      </div>

      <div className="row">
        <BillsNotPaid />
        <DueBills />
        <SataProfits />
      </div>

      <div className="card card-custom">
        <div className="card-header">
          <h3 className="card-title">
            <FormattedMessage id="DASHBOARD.CREATE.FORM.BILL.TITLE" />
          </h3>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setStartDate(values.start);
            setEndDate(values.end);
          }}
        >
          {(formik) => (
            <Form>
              <div className="card-body">
                <div className="form-group row">
                  <label
                    htmlFor="example-date-input"
                    className="col-2 col-form-label"
                  >
                    <FormattedMessage id="DASHBOARD.CREATE.FORM.START.DATE" />
                  </label>
                  <div className="col-10">
                    <Field
                      className="form-control"
                      type="date"
                      id="example-date-input"
                      name="start"
                    />
                    <ErrorMessage name="start" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="example-date-input"
                    className="col-2 col-form-label"
                  >
                    <FormattedMessage id="DASHBOARD.CREATE.FORM.END.DATE" />
                  </label>
                  <div className="col-10">
                    <Field
                      className="form-control"
                      type="date"
                      id="example-date-input"
                      name="end"
                    />
                    <ErrorMessage name="end" component={TextError} />
                  </div>
                </div>
              </div>
              <SaveChanges {...{ formik }} />
            </Form>
          )}
        </Formik>
      </div>

      <div
        className={`col-lg-12 ${
          startDate === "" || endDate === "" ? "d-none" : "d-block"
        }`}
      >
        <div className="card card-custom card-stretch gutter-b">
          <div className="card-header border-0 py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="DASHBOARD.CREATE.FORM.DATA.TITLE" />
              </span>
              <span className="text-muted mt-3 font-weight-bold font-size-sm">
                <FormattedMessage id="DASHBOARD.CREATE.FORM.DATE.INFO" />
              </span>
            </h3>
          </div>
          <div className="card-body pt-0 pb-3">
            <div className="tab-content">
              <div className="table-responsive">
                <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                  <thead>
                    <tr className="text-left text-uppercase">
                      <th style={{ minWidth: `100px` }}>
                        <FormattedMessage id="DASHBOARD.CREATE.FORM.START" />
                      </th>
                      <th style={{ minWidth: `100px` }}>
                        <FormattedMessage id="DASHBOARD.CREATE.FORM.END" />
                      </th>
                      <th style={{ minWidth: `100px` }}>
                        <FormattedMessage id="DASHBOARD.CREATE.FORM.NUM.ORDERS" />
                      </th>
                      <th style={{ minWidth: `100px` }}>
                        <FormattedMessage id="DASHBOARD.CREATE.FORM.VALUE" />
                      </th>
                      <th style={{ minWidth: `80px` }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pl-0 py-8">
                        <div className="font-weight-bolder text-primary mb-0">
                          {startDate}
                        </div>
                      </td>

                      <td className="pl-0 py-8">
                        <div className="font-weight-bolder text-primary mb-0">
                          {endDate}
                        </div>
                      </td>

                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg ml-17">
                          {data?.data.data.Bills.length}
                        </span>
                      </td>

                      <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {data?.data.data.Total} {` EGP`}
                        </span>
                      </td>

                      <td className="pr-0 text-right">
                        <Link
                          className="btn btn-light-info font-weight-bolder font-size-sm"
                          to={{
                            pathname: `/bills`,
                            bills: data?.data.data.Bills,
                          }}
                        >
                          <FormattedMessage id="DASHBOARD.CREATE.FORM.CREATE" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
