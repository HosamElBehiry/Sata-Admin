import React from "react";
import { BeatLoader } from "react-spinners";
import { useFetchProfile } from "../../../private/Vendor";
import Table from "../../Products/Views/Table";
import DispLang from "../../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";
import TableTopHeader from "../../shared/TableTopHeader";
import { Link, useHistory } from "react-router-dom";

function Profile({ match }) {
  const history = useHistory();
  const { isLoading, isError, error, data } = useFetchProfile(match.params.id);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <>
        <div className="card card-custom gutter-b">
          <div className="card-body">
            <div className="d-flex mb-9">
              <div className="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                <div className="symbol symbol-50 symbol-lg-120">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${data?.data.data.user.image}`}
                    alt="Pic"
                  />
                </div>
                <div className="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
                  <span className="font-size-h3 symbol-label font-weight-boldest">
                    {data?.data.data.user.fullname[0]}
                  </span>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-wrap mt-1">
                  <div className="d-flex mr-3">
                    <span className="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">
                      {data?.data.data.user.fullname}
                    </span>
                    <span>
                      <i className="flaticon2-correct text-success font-size-h5"></i>
                    </span>
                  </div>
                  <div className="my-lg-0 my-3">
                    <Link
                      to={`/vendors/Update/${data?.data.data.user._id}`}
                      className="btn btn-sm btn-primary font-weight-bolder text-uppercase mr-3"
                    >
                      <FormattedMessage id="BUTTON.UPDATE" />
                    </Link>
                    {/* <span className="btn btn-sm btn-danger font-weight-bolder text-uppercase">
                      <FormattedMessage id="BUTTON.DELETE" />
                    </span> */}
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between mt-1">
                  <div className="d-flex flex-column flex-grow-1 pr-8">
                    <div className="d-flex flex-wrap mb-4">
                      <span className="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                        {" "}
                        {DispLang ? (
                          <>
                            {data?.data.data.user.email}
                            <i className="flaticon2-new-email mr-2 font-size-lg"></i>
                          </>
                        ) : (
                          <>
                            <i className="flaticon2-new-email mr-2 font-size-lg"></i>
                            {data?.data.data.user.email}
                          </>
                        )}
                      </span>
                      <span className="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                        {" "}
                        <i className="flaticon2-calendar-3 mr-2 font-size-lg"></i>{" "}
                        <FormattedMessage id="INPUT.ROLE.VENDOR" />
                      </span>
                    </div>
                    <span className="text-dark-50 text-hover-primary font-weight-bold">
                      {DispLang ? (
                        <>
                          <i className="flaticon2-placeholder mr-2 font-size-lg"></i>
                          {data?.data.data.app_balance_type === "percentage"
                            ? "نظام النسبه المئويه "
                            : "نظام ثابت"}
                        </>
                      ) : (
                        <>
                          <i className="flaticon2-placeholder mr-2 font-size-lg"></i>
                          {data?.data.data.app_balance_type}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="d-flex align-items-center w-25 flex-fill mt-lg-12 mt-8">
                    <span className="font-weight-bold text-dark-75">
                      <FormattedMessage id="MENU.RATES" />
                    </span>
                    <div className="progress progress-xs mx-3 w-100">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{
                          width: `60%`,
                        }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="font-weight-bolder text-dark">
                      {(data?.data.data.rate.value / 5) * 100}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-solid"></div>
            <div className="d-flex align-items-center flex-wrap mt-8">
              <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                <span className="mr-4">
                  <i className="flaticon-piggy-bank display-4 text-muted font-weight-bold"></i>
                </span>
                <div className="d-flex flex-column text-dark-75">
                  <span className="font-weight-bolder font-size-sm">
                    <FormattedMessage id="TABLE.VENDORS.EARNING" />
                  </span>
                  <span className="font-weight-bolder font-size-h5">
                    {" "}
                    {data?.data.data.Net}
                    <span className="text-dark-50 font-weight-bold">{` EGP`}</span>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center flex-lg-fill mr-5 mb-2">
                <span className="mr-4">
                  <i className="flaticon-confetti display-4 text-muted font-weight-bold"></i>
                </span>
                <div className="d-flex flex-column text-dark-75">
                  <span className="font-weight-bolder font-size-sm">
                    <FormattedMessage id="TABLE.VENDORS.TAX" />
                  </span>
                  <span className="font-weight-bolder font-size-h5">
                    {" "}
                    {data?.data.data.app_balance_amount}
                    <span className="text-dark-50 font-weight-bold">{` %`}</span>
                  </span>
                </div>
              </div>
              <div
                className="d-flex align-items-center flex-lg-fill mb-2 float-left"
                title={DispLang ? `عمال المخزن ` : `Workers`}
              >
                <span className="mr-4">
                  <i className="flaticon-network display-4 text-muted font-weight-bold"></i>
                </span>
                <div className="symbol-group symbol-hover">
                  {data?.data.data.workers.slice(0, 5).map((w) => (
                    <div
                      className="symbol symbol-30 symbol-circle"
                      data-toggle="tooltip"
                      title={w.user.fullname}
                      key={w._id}
                      onClick={() =>
                        history.push(`/workers/Update/${w.user._id}`)
                      }
                    >
                      <img
                        alt="Pic"
                        src={`${process.env.REACT_APP_API_URL}/${w.user.image}`}
                      />
                    </div>
                  ))}
                  {data?.data.data.workers.length > 5 && (
                    <div className="symbol symbol-30 symbol-circle symbol-light">
                      <span className="symbol-label font-weight-bold">
                        {data?.data.data.workers.length - 5}+
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-custom gutter-b">
          <TableTopHeader
            heading={<FormattedMessage id="TABLE.TITLE.PRODUCT.ALL" />}
            title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
          />
          <Table {...{ products: data?.data.data.user.Products }} />
        </div>
      </>
    );
  }
}

export default Profile;
