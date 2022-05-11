import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import { hookDelById } from "../../../actions/brands/brandActions";
import { CancelRequest } from "../../shared/CancelRequest";
import DispLang from "../../shared/DispLang";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Body({ page, prepareRow }) {
  const dispatch = useDispatch();
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr className="datatable-row" {...row.getRowProps()}>
            {row.cells.map((cell, i) => {
              return (
                <td
                  className={`datatable-cell ${i === 0 &&
                    "datatable-cell-left "}`}
                  {...cell.getCellProps()}
                >
                  {i === 1 || i === 0 ? (
                    <span style={{ width: "40px" }}>
                      <span className="font-weight-bolder">
                        {cell.render("Cell")}
                      </span>
                    </span>
                  ) : i === 2 ? (
                    <span style={{ width: "158px" }}>
                      <Link to={`/brands/products/${row.original._id}`}>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50 symbol-sm flex-shrink-0">
                            <div className="symbol-label">
                              <img
                                className="h-75 align-self-end"
                                src={`${process.env.REACT_APP_API_URL}/${row.original.image}`}
                                alt="Pic"
                              />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-dark-75 font-weight-bolder font-size-lg mb-0"></div>
                            <span className="text-muted font-weight-bold text-hover-primary"></span>
                          </div>
                        </div>
                      </Link>
                    </span>
                  ) : i === 3 ? (
                    <span style={{ width: "158px" }}>
                      <div className="font-weight-bolder font-size-lg mb-0">
                        <DispLang title={row.original.title} />
                      </div>
                    </span>
                  ) : i === 4 ? (
                    <span style={{ width: "158px" }}>
                      <div className="font-weight-bolder text-primary mb-0">
                        {cell.render("Cell")}
                      </div>
                      <div className="text-muted"></div>
                    </span>
                  ) : i === 5 ? (
                    <span style={{ width: "158px" }}>
                      <div className="font-weight-bold text-muted">
                        {row.original.category && (
                          <DispLang title={row.original.category.title} />
                        )}
                      </div>
                    </span>
                  ) : (
                    i === 6 && (
                      <span
                        style={{
                          overflow: "visible",
                          position: "relative",
                          width: "130px",
                        }}
                      >
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={`/brands/update/${row.original._id}`}
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
                          className="btn btn-sm btn-default btn-text-danger btn-hover-danger btn-icon"
                          title="Delete"
                          onClick={() =>
                            window.confirm("Are You Sure ?")
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
                      </span>
                    )
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

export default Body;
