import React, { Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import { useFindById } from "../../../private/Products";
import DispLang from "../../../../utils/HEADERS";

function Detail({ match }) {
  const { isLoading, isError, error, data } = useFindById(match.params.id);
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
            <div className="d-flex flex-row">
              <div className="flex-row-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body p-15 pb-20">
                        <div className="row mb-17">
                          <div className="col-xxl-5 mb-11 mb-xxl-0">
                            <div className="card card-custom card-stretch">
                              <div
                                className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: `#efefef` }}
                              >
                                <img
                                  src={`${process.env.REACT_APP_API_URL}/${data?.data.data.product.image}`}
                                  className="mw-100 w-200px"
                                  style={{ transform: `scale(1.6)` }}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-7 pl-xxl-11">
                            <h2
                              className="font-weight-bolder text-dark mb-7"
                              style={{ fontSize: `32px` }}
                            >
                              {DispLang
                                ? data?.data.data.product.title.ar
                                : data?.data.data.product.title.en}
                            </h2>
                            <div className="font-size-h2 mb-7 text-dark-50">
                              <FormattedMessage id="TABLE.ORDERS.PRICE" />
                              <span className="text-info font-weight-boldest ml-2">
                                {data?.data.data.product.price} {` EGP`}
                              </span>
                            </div>
                            <div className="line-height-xl">
                              {DispLang
                                ? data?.data.data.product.description.ar
                                : data?.data.data.product.description.en}
                            </div>
                          </div>
                        </div>
                        <div className="row mb-6">
                          <div className="col-6 col-md-4">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                <FormattedMessage id="TABLE.PRODUCT.BRAND" />
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {DispLang
                                  ? data?.data.data.product.brand.title.ar
                                  : data?.data.data.product.brand.title.en}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                <FormattedMessage id="TABLE.PRODUCT.SOLD" />
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {data?.data.data.product.bought}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                <FormattedMessage id="TABLE.PRODUCT.COLOR" />
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {data?.data.data.product.color.map((c) => (
                                  <Fragment key={c}>{c + "  "}</Fragment>
                                ))}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                <FormattedMessage id="TABLE.PRODUCT.VISITEDBY" />
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {data?.data.data.product.visitedBy.length}{" "}
                                <FormattedMessage id="TABLE.PRODUCT.VISITEDBY.PERSON" />
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="mb-8 d-flex flex-column">
                              <span className="text-dark font-weight-bold mb-4">
                                <FormattedMessage id="TABLE.PRODUCT.STORE" />
                              </span>
                              <span className="text-muted font-weight-bolder font-size-lg">
                                {data?.data.data.product.store}
                              </span>
                            </div>
                          </div>
                          {/* <div className="col-6 col-md-4">
                          <div className="mb-8 d-flex flex-column">
                            <span className="text-dark font-weight-bold mb-4">
                              Sold Items
                            </span>
                            <span className="text-muted font-weight-bolder font-size-lg">
                              280
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="mb-8 d-flex flex-column">
                            <span className="text-dark font-weight-bold mb-4">
                              Total Sales
                            </span>
                            <span className="text-muted font-weight-bolder font-size-lg">
                              $24,900
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="mb-8 d-flex flex-column">
                            <span className="text-dark font-weight-bold mb-4">
                              Net Profit
                            </span>
                            <span className="text-muted font-weight-bolder font-size-lg">
                              $3,750
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="mb-8 d-flex flex-column">
                            <span className="text-dark font-weight-bold mb-4">
                              Balance
                            </span>
                            <span className="text-muted font-weight-bolder font-size-lg">
                              $68,300
                            </span>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
