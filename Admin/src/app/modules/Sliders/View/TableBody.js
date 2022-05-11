import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useHistory } from "react-router-dom";
import SVG from "react-inlinesvg";
import { useDispatch } from "react-redux";
import { hookDelById } from "../../../actions/sliders/sliderActions";
import { CancelRequest } from "../../shared/CancelRequest";
import DispLang from "../../../../utils/HEADERS";

function TableBody({ page, prepareRow }) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="datatable-row"
            style={{ left: "0px" }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`datatable-cell ${i === 0 &&
                    "datatable-cell-center"}`}
                >
                  <span
                    style={
                      i !== 0 && i !== 1 && i !== 7
                        ? { width: "137px" }
                        : i === 0 || i === 1
                        ? { width: "40px" }
                        : { width: "125px" }
                    }
                  >
                    {i === 2 ? (
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-40 flex-shrink-0">
                          <div
                            className="symbol-label"
                            style={{
                              backgroundImage: `url(${toAbsoluteUrl(
                                `${process.env.REACT_APP_API_URL}/${row.original.image}`
                              )})`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ) : i === 4 || i === 5 ? (
                      <>
                        <span
                          className={`label font-weight-bold label-lg label-dot mr-2 ${
                            row.cells[i].value === false
                              ? "label-danger"
                              : "label-success"
                          }`}
                        ></span>
                        <span
                          className={`font-weight-bold ${
                            row.cells[i].value === false
                              ? "text-danger"
                              : "text-success"
                          }`}
                        >
                          {DispLang
                            ? cell.render("Cell").props.value
                              ? `نعم`
                              : `لا `
                            : cell.render("Cell")}
                        </span>
                      </>
                    ) : i !== 7 ? (
                      cell.render("Cell")
                    ) : (
                      <>
                        <span
                          className="btn btn-sm btn-clean btn-icon mr-2"
                          title="Edit details"
                          onClick={() =>
                            history.push(`/sliders/update/${row.original._id}`)
                          }
                        >
                          <span className="svg-icon svg-icon-md">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/Communication/Write.svg"
                              )}
                            ></SVG>
                          </span>
                        </span>
                        <span
                          className="btn btn-sm btn-clean btn-icon"
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
