import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { Columns } from "./Columns";
import GlobalFilter from "./GlobalFilter";
import Pagination from "../../shared/Pagination";
import CardHeader from "./CardHeader";
import IndeterminateCheckbox from "../../shared/IndeterminateCheckbox";
import Body from "./Body";
const CardBody = ({ brands }) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => brands, [brands]);
  const {
    getTableBodyProps,
    getTableProps,
    page,
    state,
    setGlobalFilter,
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
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="card card-custom gutter-b">
          <div className="card-body">
            <GlobalFilter
              filter={state.filter}
              setFilter={setGlobalFilter}
              selectedFlatRows={selectedFlatRows}
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
                <CardHeader headerGroups={headerGroups} />
                <tbody
                  {...getTableBodyProps()}
                  style={{ left: "0px" }}
                  className="datatable-body"
                >
                  <Body {...{ page, prepareRow }} />
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
        </div>
      </div>
    </div>
  );
};

export default CardBody;
