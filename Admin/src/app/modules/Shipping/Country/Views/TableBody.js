import React from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

function TableBody({ page, prepareRow }) {
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="datatable-row datatable-row-even"
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`datatable-cell ${i === 0 &&
                    "datatable-cell-sorted datatable-cell-left "}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: "40px" }
                        : 1 !== 5
                        ? { width: `137px` }
                        : {
                            overflow: `visible`,
                            position: `relative`,
                            width: `137px`,
                          }
                    }
                  >
                    {i === 2 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 flex-shrink-0">
                          <div
                            className="symbol-label"
                            style={{
                              backgroundImage: `url(${process.env.REACT_APP_API_URL}/${row.cells[i].value})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : i !== 5 ? (
                      <span
                        className={`${i === 0 ||
                          (i === 1 && "font-weight-bolder")}`}
                      >
                        {cell.render("Cell")}
                      </span>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-clean btn-icon mr-2"
                          title="Edit details"
                          to={`/shipping/county/update/${row.original._id}`}
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
                          className="btn btn-sm btn-clean btn-icon"
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
