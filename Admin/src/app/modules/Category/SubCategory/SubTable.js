import React, { useMemo } from "react";
import GlobalFilter from "./GlobalFilter";
import TableHeader from "./TableHeader";
import { useHistory } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { COLUMN } from "./COLUMN";
import Pagination from "../../shared/Pagination";
import { CancelRequest } from "../../shared/CancelRequest";
import { useDispatch } from "react-redux";
import { hookDelById } from "../../../actions/subcategory/subcategoryActions";
import IndeterminateCheckbox from "../../shared/IndeterminateCheckbox";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

const SubTable = ({ subCategories, id }) => {
  const history = useHistory();
  const columns = useMemo(() => COLUMN, []);
  const data = useMemo(() => subCategories, [subCategories]);
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
        id={id}
      />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table
          {...getTableProps()}
          className="datatable-table"
          style={{ display: "block" }}
        >
          <TableHeader {...{ headerGroups }} />
          <tbody {...getTableBodyProps()} className="datatable-body">
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
                        className={`datatable-cell ${i === 0 &&
                          "datatable-cell-center datatable-cell-check"}`}
                        {...cell.getCellProps()}
                      >
                        <span
                          style={
                            i !== 0 && i !== 6
                              ? { width: "137px" }
                              : i === 0
                              ? { width: "20px" }
                              : {
                                  overflow: "visible",
                                  position: "relative",
                                  width: "125px",
                                }
                          }
                        >
                          {i === 2 ? (
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-40 symbol-sm flex-shrink-0">
                                <img
                                  src={`${process.env.REACT_APP_API_URL}/${row.original.image}`}
                                  alt="Pic"
                                />
                              </div>
                            </div>
                          ) : i !== 6 ? (
                            cell.render("Cell")
                          ) : (
                            <>
                              <span
                                className="btn btn-sm btn-clean btn-icon mr-2"
                                title="Edit details"
                                onClick={() =>
                                  history.push(
                                    `/categories/sub-category/update/${row.original._id}`
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
                            </>
                          )}
                        </span>
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

export default SubTable;
