import React from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import DispLang from "../../../../utils/HEADERS";
import SVG from "react-inlinesvg";
import { Link, useHistory } from "react-router-dom";
import {
  hookDelById,
  hookDelByUsrId,
} from "../../../actions/workers/workerActions";
import { useDispatch, useSelector } from "react-redux";
import { CancelRequest } from "../../shared/CancelRequest";

function TableBody({ page, prepareRow }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();
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
                    "datatable-cell-sorted datatable-cell-left"}`}
                >
                  <span
                    style={
                      i === 0 || i === 1
                        ? { width: `40px` }
                        : i === 2 || i === 4
                        ? { width: "250px" }
                        : i !== 6
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
                    ) : i === 2 || i === 4 ? (
                      <div
                        className={`d-flex align-items-center ${i === 4 &&
                          "cursor-pointer"}`}
                        onClick={() =>
                          i === 4 &&
                          history.push(
                            `/vendors/profile/${row.original.vendor?.user?._id}`
                          )
                        }
                      >
                        <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                          <img
                            className=""
                            src={`${process.env.REACT_APP_API_URL}/${
                              i === 2
                                ? row.original.user?.image
                                : row.original.vendor?.user?.image
                            }`}
                            alt="Pic"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-dark-75 font-weight-bolder font-size-lg mb-0">
                            {`${
                              i === 2
                                ? row.original.user?.fullname
                                : row.original.vendor?.user?.fullname
                            }`}
                          </div>
                          <span className="text-muted font-weight-bold text-hover-primary">
                            {`${
                              i === 2
                                ? row.original.user?.email
                                : row.original.vendor?.user?.email
                            }`}
                          </span>
                        </div>
                      </div>
                    ) : i === 3 ? (
                      <div className="font-weight-bolder text-primary mb-0">
                        {cell.render("Cell")}{" "}
                      </div>
                    ) : i === 5 ? (
                      <span
                        className={`label label-lg font-weight-bold label-inline label-light-${
                          cell.row.values["user.status"] === "Pending"
                            ? "primary"
                            : cell.row.values["user.status"] === "Confirmed"
                            ? "success"
                            : "danger"
                        }`}
                      >
                        {DispLang
                          ? cell.row.values["user.status"] === "Pending"
                            ? "معلق"
                            : cell.row.values["user.status"] === "Confirmed"
                            ? "مؤكد"
                            : "محظور"
                          : cell.render("Cell")}
                      </span>
                    ) : (
                      <>
                        <Link
                          className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                          title="Edit details"
                          to={`/workers/Update/${row.original.user?._id}`}
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
                              ? // عشان لما البائع يحب يمسح بياناات العامل بتاعه
                                dispatch(
                                  user.roles[0] === 1
                                    ? hookDelByUsrId(row.original.user?._id)
                                    : hookDelById(
                                        row.original._id,
                                        row.original.user?._id
                                      )
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
