import React, { useMemo } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import IndeterminateCheckbox from "../../../shared/IndeterminateCheckbox";
import Pagination from "../../../shared/Pagination";
import { Columns } from "./Columns";
import GlobalFilter from "./GlobalFilter";
function Table({ cities }) {
  const data = useMemo(() => cities, [cities]);
  const columns = useMemo(() => Columns, []);
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
    <div
      className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
      id="kt_datatable"
    >
      <GlobalFilter
        filter={state.filter}
        setFilter={setGlobalFilter}
        selectedFlatRows={selectedFlatRows}
      />
      <table
        className="datatable-table"
        style={{ display: `block` }}
        {...getTableProps()}
      >
        <thead className="datatable-head">
          <TableHeader {...{ headerGroups }} />
        </thead>
        <tbody className="datatable-body" {...getTableBodyProps()}>
          <TableBody {...{ page, prepareRow }} />
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
  );
}

export default Table;
