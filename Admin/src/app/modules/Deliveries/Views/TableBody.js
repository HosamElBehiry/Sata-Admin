import React from "react";
import Rating from "@material-ui/lab/Rating/Rating";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import DispLang from "../../../../utils/HEADERS";
import { Link } from "react-router-dom";
import { hookDeltByUsrId } from "../../../actions/deliveries/deliveryActions";
import { useDispatch } from "react-redux";
import { CancelRequest } from "../../shared/CancelRequest";

function TableBody({ page, prepareRow }) {
  const dispatch = useDispatch();

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
                  className={`datatable-cell ${(i === 0 || i === 1) &&
                    "datatable-cell-sorted datatable-cell-left"}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i === 2
                        ? { width: "250px" }
                        : i !== 6 && i !== 7
                        ? { width: "158px" }
                        : i === 6
                        ? {
                            width: "120px",
                          }
                        : {
                            overflow: `visible`,
                            position: `relative`,
                            width: `130px`,
                          }
                    }
                  >
                    {i === 0 || i === 1 ? (
                      <span className="font-weight-bolder">
                        {cell.render("Cell")}
                      </span>
                    ) : i === 2 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                          <img
                            className=""
                            src={`${process.env.REACT_APP_API_URL}/${row.original.user?.image}`}
                            alt="Pic"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                            {`${row.original.user?.fullname}`}
                          </div>
                          <span className="text-muted font-weight-bold text-hover-primary">
                            {`${row.original.user?.email}`}
                          </span>
                        </div>
                      </div>
                    ) : i === 3 ? (
                      <div className="font-weight-bolder text-primary mb-0">
                        {cell.render("Cell")}
                      </div>
                    ) : i === 4 ? (
                      <Rating
                        name="size-small"
                        defaultValue={cell.row.values["rate.value"]}
                        readOnly
                      />
                    ) : i === 5 ? (
                      <span
                        className={`label label-lg font-weight-bold label-inline  label-light-${
                          row.original?.user?.status === "Pending"
                            ? "primary"
                            : row.original?.user?.status === "Confirmed"
                            ? `success`
                            : "danger"
                        } `}
                      >
                        {DispLang
                          ? row.original?.user?.status === "Pending"
                            ? "معلق"
                            : row.original?.user?.status === "Confirmed"
                            ? "مؤكد"
                            : "محظور"
                          : row.original?.user?.status}
                      </span>
                    ) : i !== 7 ? (
                      <>
                        <span
                          className={`label label-dot mr-2 label-${
                            cell.row.values["inOrder"] ? `success` : `danger`
                          }`}
                        ></span>
                        <span
                          className={`font-weight-bold text-${
                            cell.row.values["inOrder"] ? `success` : `danger`
                          }`}
                        >
                          {DispLang
                            ? cell.row.values["inOrder"]
                              ? `يعمل الان`
                              : `لا يعمل الان`
                            : cell.render("Cell")}
                        </span>
                      </>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={`/deliveries/Update/${row.original?.user?._id}`}
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
                          onClick={() =>
                            window.confirm("Are You Sure ?")
                              ? dispatch(
                                  hookDeltByUsrId(row.original.user?._id)
                                )
                              : CancelRequest()
                          }
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
