import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";
import Rating from "@material-ui/lab/Rating/Rating";
import DispLang from "../../../../utils/HEADERS";
import { Link, useHistory } from "react-router-dom";

function TableBody({ page, prepareRow }) {
  const history = useHistory();
  return (
    <>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="datatable-row datatable-row-even"
            style={{ left: `0px` }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  className={`${i === 0 &&
                    "datatable-cell-sorted datatable-cell-left"} datatable-cell`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i !== 7
                        ? { width: "130px" }
                        : {
                            overflow: `visible`,
                            position: `relative`,
                            width: `130px`,
                          }
                    }
                  >
                    {i === 0 || i === 1 ? (
                      <span
                        className={`font-weight-bolder ${i === 1 &&
                          "cursor-pointer"}`}
                        onClick={() =>
                          i === 1 &&
                          history.push(`/products/detail/${row.original._id}`)
                        }
                      >
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
                        {DispLang
                          ? row.original.title?.ar
                          : row.original.title?.en}
                      </div>
                    ) : i === 4 ? (
                      <>
                        <div className="font-weight-bolder font-size-lg mb-0">
                          {DispLang
                            ? row.original.categoryId?.title?.ar
                            : row.original.categoryId?.title?.en}
                        </div>
                        <div className="font-weight-bold text-muted">
                          {DispLang
                            ? row.original.subCategory?.title?.ar
                            : row.original.subCategory?.title?.en}
                        </div>
                      </>
                    ) : i === 5 ? (
                      <>
                        <div className="font-weight-bolder text-primary mb-0">
                          {cell.render("Cell")}
                        </div>
                        <div className="text-muted">
                          {DispLang
                            ? row.original.brand.title.ar
                            : row.original.brand.title.en}
                        </div>
                      </>
                    ) : i === 6 ? (
                      <div className="font-weight-bold text-muted">
                        <Rating
                          name="size-small"
                          defaultValue={row.original.rate.value}
                          readOnly
                        />
                      </div>
                    ) : i === 7 ? (
                      <span
                        className={`label label-lg font-weight-bold label-inline label-light-${
                          row.original.isApproved ? "success" : "danger"
                        }`}
                      >
                        {DispLang
                          ? row.original.isApproved
                            ? `مؤكده`
                            : `معلقه`
                          : cell.render("Cell")}
                      </span>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={`/products/update/${row.original._id}`}
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
