import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { hookDelById } from "../../../actions/blogs/blogs";
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
            className="datatable-row "
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
                      i === 1 || i === 0
                        ? { width: `40px` }
                        : i === 5
                        ? {
                            overflow: `visible`,
                            position: `relative`,
                            width: `130px`,
                          }
                        : { width: "158px" }
                    }
                  >
                    {i === 2 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                          <img
                            src={`${process.env.REACT_APP_API_URL}/${row.original.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                    ) : i === 5 ? (
                      <div className="font-weight-bolder text-primary mb-0">
                        {cell.render("Cell")}
                      </div>
                    ) : i !== 6 ? (
                      <span className="font-weight-bolder">
                        {cell.render("Cell")}
                      </span>
                    ) : (
                      <>
                        <Link
                          to={{
                            pathname: "/blogs-page/update",
                            blog: row.original,
                          }}
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
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
                            window.confirm("Are You Sure ? ")
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
