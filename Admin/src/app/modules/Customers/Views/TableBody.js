import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import DispLang from "../../../../utils/HEADERS";
import { Link } from "react-router-dom";
import { CancelRequest } from "../../shared/CancelRequest";
import { useDispatch } from "react-redux";
import { hookDelById } from "../../../actions/customers/customerActions";
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
                  className={`datatable-cell ${i === 0 &&
                    "datatable-cell-sorted datatable-cell-left"}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i !== 7
                        ? { width: "158px" }
                        : { width: "130px" }
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
                            src={`${process.env.REACT_APP_API_URL}/${row.original.image}`}
                            alt="Pic"
                          />
                        </div>
                      </div>
                    ) : i === 3 ? (
                      <div className="font-weight-bolder font-size-lg mb-0">
                        {" "}
                        {cell.render("Cell")}
                      </div>
                    ) : i === 4 || i === 5 ? (
                      <div
                        className={`${
                          i === 4
                            ? "font-weight-bolder text-primary mb-0"
                            : "font-weight-bold text-muted"
                        }`}
                      >
                        {cell.render("Cell")}
                      </div>
                    ) : i === 6 ? (
                      <span
                        className={`label label-lg font-weight-bold label-inline label-light-${
                          row.original.status === "Pending"
                            ? "primary"
                            : row.original.status === "Confirmed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {DispLang
                          ? row.original.status === "Pending"
                            ? "معلق"
                            : row.original.status === "Confirmed"
                            ? "مؤكد"
                            : "محظور"
                          : cell.render("Cell")}
                      </span>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={`/customers/update/${row.original._id}`}
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
                            window.confirm("Are You sure ?")
                              ? dispatch(hookDelById(row.original._id))
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
