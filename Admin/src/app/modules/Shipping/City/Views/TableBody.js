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
            className="datatable-row"
            style={{ left: `0px` }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`datatable-cell ${i === 0 ||
                    (i === 1 && "datatable-cell-sorted datatable-cell-left")}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i !== 5
                        ? { width: "158px" }
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
                    ) : i === 4 ? (
                      <div className="font-weight-bolder text-primary mb-0">
                        {cell.render("Cell")}
                      </div>
                    ) : i !== 5 ? (
                      <div className="font-weight-bolder font-size-lg mb-0">
                        {" "}
                        {cell.render("Cell")}
                      </div>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={{
                            pathname: `/shipping/city/update/${row.original._id}`,
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
