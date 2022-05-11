import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./COLUMNS";
import { useHistory } from "react-router-dom";
import GlobalFilter from "./GlobalFilter";
import Pagination from "../../shared/Pagination";
import CardHeader from "../CategoryComponent/CardHeader";
import { useDispatch } from "react-redux";
import { CancelRequest } from "../../shared/CancelRequest";
import { hookDelById } from "../../../actions/category/categoryActions";
import IndeterminateCheckbox from "../../shared/IndeterminateCheckbox";
import SVG from "react-inlinesvg";
import DispLang from "../../../../utils/HEADERS";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const CardBody = ({ allCategories }) => {
  const data = useMemo(() => allCategories, [allCategories]);
  const columns = useMemo(() => COLUMNS, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    getTableBodyProps,
    getTableProps,
    page,
    state,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
    prepareRow,
    headerGroups,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <div className="card-body">
      <GlobalFilter
        filter={state.globalFilter}
        setFilter={setGlobalFilter}
        selectedFlatRows={selectedFlatRows}
      />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table {...getTableProps()} className="datatable-table d-block">
          <CardHeader {...{ headerGroups }} />
          <tbody {...getTableBodyProps()} className="datatable-body">
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
                        className={`datatable-cell ${i === 0 &&
                          "datatable-cell-sorted datatable-cell-center datatable-cell-check"}`}
                        {...cell.getCellProps()}
                      >
                        {i === 5 || i === 6 ? (
                          <span style={{ width: "137px" }}>
                            <span
                              className={`label label-dot mr-2 ${
                                cell.render("Cell").props.value
                                  ? "label-success"
                                  : "label-danger"
                              }`}
                            ></span>
                            <span
                              className={`font-weight-bold ${
                                cell.render("Cell").props.value
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            >
                              {DispLang
                                ? cell.render("Cell").props.value
                                  ? `ظهور`
                                  : `اخفاء `
                                : cell.render("Cell")}
                            </span>
                          </span>
                        ) : i === 7 ? (
                          <span
                            style={{
                              overflow: "visible",
                              position: "relative",
                              width: "125px",
                              marginRight: "10px",
                            }}
                          >
                            <div className="dropdown dropdown-inline">
                              <span
                                className="btn btn-sm btn-clean btn-icon mr-2"
                                data-toggle="dropdown"
                                title="Show details"
                                onClick={() =>
                                  history.push(
                                    `/categories/sub-category/${row.original._id}`
                                  )
                                }
                              >
                                <span className="svg-icon svg-icon-md">
                                  <SVG
                                    src={toAbsoluteUrl(
                                      "/media/svg/icons/General/Visible.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </span>
                            </div>
                            <span
                              className="btn btn-sm btn-clean btn-icon mr-2"
                              title="Edit details"
                              onClick={() =>
                                history.push(
                                  `/categories/update/${row.original._id}`
                                )
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
                          </span>
                        ) : i === 3 ? (
                          <span style={{ width: "137px" }}>
                            {localStorage.getItem("i18nConfig") &&
                            JSON.parse(localStorage.getItem("i18nConfig"))
                              .selectedLang === "ar"
                              ? row.original.title.ar
                              : row.original.title.en}
                          </span>
                        ) : i === 2 ? (
                          <span style={{ width: "137px" }}>
                            <div
                              className="d-flex align-items-center cursor-pointer"
                              onClick={() =>
                                history.push(
                                  `/categories/Products/${row.original._id}`
                                )
                              }
                            >
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
                          </span>
                        ) : (
                          <span
                            style={{
                              width: `${i === 0 || i === 1 ? "40px" : "137px"}`,
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
          </tbody>
        </table>
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          state={state}
          gotoPage={gotoPage}
          pageCount={pageCount}
          pageOptions={pageOptions}
          data={data}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default CardBody;
