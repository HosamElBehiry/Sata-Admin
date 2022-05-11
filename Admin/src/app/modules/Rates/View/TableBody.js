import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Rating from "@material-ui/lab/Rating/Rating";
import SVG from "react-inlinesvg";
import { Link, useParams } from "react-router-dom";
import DispLang from "../../../../utils/HEADERS";
function TableBody({ page, prepareRow }) {
  const { type } = useParams();
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="datatable-row"
            style={{ left: `0px` }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`datatable-cell ${i === 0 &&
                    "datatable-cell-left"}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i === 2 || i === 4
                        ? { width: "180px" }
                        : i === 3 || i === 5 || i === 6
                        ? { width: `158px` }
                        : {
                            overflow: `visible`,
                            position: `relative`,
                            width: `130px`,
                          }
                    }
                    className={`${i === 3 ? "text-center" : ""}`}
                  >
                    {i === 2 || i === 4 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                          <img
                            className=""
                            src={`${process.env.REACT_APP_API_URL}/${
                              i === 2
                                ? `${row.original.user.image}`
                                : `${
                                    type === "vendor"
                                      ? row.original.vendor?.user.image
                                      : type === "delivery"
                                      ? row.original.delivery?.user.image
                                      : row.original.product?.image
                                  }`
                            }`}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div
                            className="text-dark-75 font-weight-bolder font-size-lg mb-0"
                            title={`${
                              type === "vendor"
                                ? row.original.vendor?.user.fullname
                                : type === "delivery"
                                ? row.original.delivery?.user.fullname
                                : type === "order"
                                ? row.original.order
                                : DispLang
                                ? row.original.product?.title.ar
                                : row.original.product?.title.en
                            }`}
                          >
                            {i === 2
                              ? `${row.original.user.fullname}`
                              : `${
                                  type === "vendor"
                                    ? row.original.vendor?.user.fullname
                                    : type === "delivery"
                                    ? row.original.delivery?.user.fullname
                                    : type === "order"
                                    ? row.original.order
                                    : DispLang
                                    ? row.original.product?.title.ar
                                    : row.original.product?.title.en
                                }`}
                          </div>
                          <span className="text-muted font-weight-bold text-hover-primary">
                            {i === 2
                              ? `${row.original.user.email}`
                              : `${
                                  type === "vendor"
                                    ? row.original.vendor?.user.email
                                    : type === "delivery"
                                    ? row.original.delivery?.user.email
                                    : type === "product"
                                    ? `${row.original.product?.price} EGP`
                                    : ""
                                }`}
                          </span>
                        </div>
                      </div>
                    ) : i === 3 ? (
                      <>
                        <div className="font-weight-bolder text-primary mb-0">
                          {cell.render("Cell")}
                        </div>
                        <div
                          className={`${
                            row.original.status === "Pending"
                              ? "text-info"
                              : row.original.status === "Confirmed"
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {DispLang
                            ? row.original.status === "Pending"
                              ? "معلق"
                              : row.original.status === "Confirmed"
                              ? "مؤكد"
                              : "محظور"
                            : row.original.status}
                        </div>
                      </>
                    ) : i === 6 ? (
                      <Rating
                        name="size-small"
                        defaultValue={row.original.rate}
                        readOnly
                      />
                    ) : i === 7 ? (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={{
                            pathname: `/rates/update/${row.original._id}`,
                            rate: row.original,
                          }}
                        >
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            ></SVG>
                          </span>
                        </Link>
                        <span
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon"
                          title="Delete"
                        >
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Trash.svg"
                              )}
                            ></SVG>
                          </span>
                        </span>
                      </>
                    ) : (
                      <span className="font-weight-bolder">
                        {cell.render("Cell")}{" "}
                      </span>
                    )}
                  </span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}

export default TableBody;
