import React from "react";
import DispLang from "../../../../utils/HEADERS";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
function TableBody({ page, prepareRow }) {
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            className="datatable-row"
            style={{ left: "0px" }}
            {...row.getRowProps()}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  className={`datatable-cell ${
                    i === 0 ? "datatable-cell-center datatable-cell-check" : ""
                  }`}
                  {...cell.getCellProps()}
                >
                  {i === 4 ? (
                    <span style={{ width: "137px" }}>
                      <span
                        className={`label font-weight-bold label-lg label-inline ${
                          row.original.status === "Pending"
                            ? "label-light-primary"
                            : row.original.status === "Confirmed"
                            ? "label-light-success"
                            : "label-light-danger"
                        }`}
                      >
                        {DispLang
                          ? row.original.status === "Pending"
                            ? `معلقه`
                            : row.original.status === "Confirmed"
                            ? `مؤكده`
                            : `محظوره`
                          : row.original.status}
                      </span>
                    </span>
                  ) : i === 6 ? (
                    <span
                      style={{
                        overflow: "visible",
                        position: "relative",
                        width: "125px",
                        marginRight: "15px",
                      }}
                    >
                      <Link
                        className="btn btn-sm btn-clean btn-icon mr-2"
                        title="Edit details"
                        to={`/company-shipping/update/${row.original._id}`}
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
                    </span>
                  ) : (
                    <span
                      style={{
                        width: `${i === 0 ? "40px" : "137px"}`,
                      }}
                    >
                      {cell.render("Cell")}
                    </span>
                  )}
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
